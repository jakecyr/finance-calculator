declare module 'finance-calculator' {
  function presentToFutureValue(
    presentValue: number,
    interestRate: number,
    periods: number,
  ): number;

  function futureToPresentValue(futureValue: number, interestRate: number, periods: number): number;
  function interestRateFromPresentFuture(
    presentValue: number,
    futureValue: number,
    periods: number,
  ): number;
  function calculateSMA(valuesArr: number[], length: number): number;
  function calculateATR(highs: number[], lows: number[], length: number): number;
  function calculateRSI(valuesArr: number[], length: number): number;
}
