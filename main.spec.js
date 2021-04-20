const FinanceCalculator = require('./main');

describe('presentToFutureValue', () => {
  it('returns the correct future value', () => {
    const fv = FinanceCalculator.presentToFutureValue(100, 0.08, 10);
    expect(fv.toFixed(2)).toEqual('215.89');
  });
});

describe('futureToPresentValue', () => {
  it('returns the correct present value', () => {
    const fv = FinanceCalculator.futureToPresentValue(215.89, 0.08, 10);
    expect(fv.toFixed(2)).toEqual('100.00');
  });
});

describe('interestRateFromPresentFuture', () => {
  it('returns the correct interest rate', () => {
    const fv = FinanceCalculator.interestRateFromPresentFuture(100, 215.89, 10);
    expect(fv.toFixed(2)).toEqual('0.08');
  });
});

describe('calculateSMA', () => {
  it('returns the right value with less values than the length', () => {
    const sma = FinanceCalculator.calculateSMA([1, 2, 3, 4, 5], 2);
    expect(sma).toEqual(4.5);
  });

  it('returns the right value equal values to length', () => {
    const sma = FinanceCalculator.calculateSMA([1, 2, 3, 4, 5], 5);
    expect(sma).toEqual(3);
  });

  it('returns the right value more values than the length', () => {
    const sma = FinanceCalculator.calculateSMA([1, 2, 3, 4, 5, 6], 5);
    expect(sma).toEqual(4);
  });
});

describe('calculateRSI', () => {
  it('returns the correct value', () => {
    const rsi = FinanceCalculator.calculateRSI(
      [134.47, 134.83, 134.75, 135.24, 133.13, 133.17, 132.76],
      4,
    );
    expect(rsi.toFixed(2)).toEqual('20.08');
  });

  it('returns the correct value', () => {
    const rsi = FinanceCalculator.calculateRSI(
      [134.47, 134.83, 134.75, 135.24, 133.13, 133.17, 132.76],
      5,
    );
    expect(rsi.toFixed(2)).toEqual('19.49');
  });
});
