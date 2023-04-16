function maxProfit(prices: number[], fee: number): number {
  if (prices === null || prices.length <= 2) {
    return 0;
  }
  var buy : number = -prices[0];
  var sell: number = 0;

  for (let i = 1; i < prices.length; i++) {
    buy = Math.max(sell - prices[i], buy); 
    sell = Math.max(buy + prices[i] - fee, sell);
  }
  return sell;
};
//Leetcode Problem 714
//Similar approach to Buy-Sell with cooldown
