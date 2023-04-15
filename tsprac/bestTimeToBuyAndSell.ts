function maxProfit(prices: number[]) : number {
  var profit : number = 0;
  var prevIdx : number = 0;
  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - prices[prevIdx]);
    if (prices[i] < prices[prevIdx]) {
      prevIdx = i;
    }
  }
  return profit > 0 ? profit : 0;
}
