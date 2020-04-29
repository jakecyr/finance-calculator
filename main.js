module.exports = {
    presentToFutureValue: (presentValue, interestRate, periods) => {
        return presentValue * ((1 + interestRate) ** periods);
    },
    futureToPresentValue: (futureValue, interestRate, periods) => {
        return futureValue / ((1 + interestRate) ** periods);
    },
    interestRateFromPresentFuture: (presentValue, futureValue, periods) => {
        return ((futureValue / presentValue) ** (1 / periods)) - 1;
    },
    calculateSMA: (valuesArr, length) => {
        const values = valuesArr.slice(-length);

        if (values.length > 0) {
            return values.reduce((a, b) => (parseInt(a) || 0) + (parseInt(b) || 0)) / values.length;
        } else {
            return null;
        }
    },
    calculateATR: (highs, lows, length) => {
        const tr = highs.map((high, index) => high - lows[index]);

        if (tr.length > length) {
            for (let i = 0; i < tr.length; i++) {
                if (i >= length) {
                    const previousAtr = tr[i - 1];
                    tr[i] = ((previousAtr * (length - 1)) + tr[i]) / length;
                } else {
                    const previousValues = tr.slice(0, i + 1);
                    const sum = previousValues.reduce((a, b) => a + b);
                    tr[i] = sum / length;
                }
            }
        }

        return tr;
    },
    calculateRSI: (valuesArr, length) => {
        let ups = [];
        let downs = [];

        const lastPrices = valuesArr.slice(-(length + 1));

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
            const rsi = 100 - (100 / (1 + rs));

            return rsi;
        } else {
            return null;
        }
    },
};
