const presentToFutureValue = (presentValue, interestRate, periods) => {
  return presentValue * (1 + interestRate) ** periods;
};

const futureToPresentValue = (futureValue, interestRate, periods) => {
  return futureValue / (1 + interestRate) ** periods;
};

const interestRateFromPresentFuture = (presentValue, futureValue, periods) => {
  return (futureValue / presentValue) ** (1 / periods) - 1;
};

const calculateSMA = (valuesArr, length) => {
  const values = valuesArr.slice(-length);

  if (values.length > 0) {
    return values.reduce((a, b) => (parseFloat(a) || 0) + (parseFloat(b) || 0)) / values.length;
  } else {
    return null;
  }
};

const calculateATR = (highs, lows, length) => {
  const tr = highs.map((high, index) => high - lows[index]);

  if (tr.length > length) {
    for (let i = 0; i < tr.length; i++) {
      if (i >= length) {
        const previousAtr = tr[i - 1];
        tr[i] = (previousAtr * (length - 1) + tr[i]) / length;
      } else {
        const previousValues = tr.slice(0, i + 1);
        const sum = previousValues.reduce((a, b) => a + b);
        tr[i] = sum / length;
      }
    }
  }

  return tr;
};

const calculateRSI = (valuesArr, length) => {
  let ups = [];
  let downs = [];

  const lastPrices = valuesArr.slice(-(length + 1));

  if (lastPrices.length < 2) {
    return null;
  }

  for (let i = 1; i < lastPrices.length - 1; i++) {
    const currentPrice = lastPrices[i];
    const lastPrice = lastPrices[i - 1];
    const diff = currentPrice - lastPrice;

    if (diff > 0) {
      ups.push(diff);
      downs.push(0);
    } else if (diff < 0) {
      downs.push(Math.abs(diff));
      ups.push(0);
    } else {
      downs.push(0);
      ups.push(0);
    }
  }

  if (ups.length > 0 && downs.length > 0) {
    const averageUp = ups.reduce((a, b) => a + b) / ups.length;
    const averageDown = downs.reduce((a, b) => a + b) / downs.length;
    const rs = averageUp / averageDown;
    return 100 - 100 / (1 + rs);
  } else {
    return null;
  }
};

module.exports = {
  presentToFutureValue,
  futureToPresentValue,
  interestRateFromPresentFuture,
  calculateSMA,
  calculateATR,
  calculateRSI,
};
