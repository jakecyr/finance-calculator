# Finance Calculator

Simple financial calculation functions

## Methods include

- Present to future value
- Future to present value
- Insert rate from present / future values
- RSI with given values / length
- SMA (simple moving average) with given values / length
- ATR (Average True Range)

```typescript
function presentToFutureValue(presentValue: number, interestRate: number, periods: number): number;
function futureToPresentValue(futureValue: number, interestRate: number, periods: number): number;
function interestRateFromPresentFuture(
  presentValue: number,
  futureValue: number,
  periods: number,
): number;
function calculateSMA(valuesArr: number[], length: number): number;
function calculateATR(highs: number[], lows: number[], length: number): number;
function calculateRSI(valuesArr: number[], length: number): number;
```
