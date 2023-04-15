function maxProfit(prices: number[]) : number {
  if (prices === null || prices.length <= 1) {
    return 0;
  }
  var buy : number = -prices[0];
  var sell: number = 0;
  var prevSell: number = 0;

  for(let i = 1; i < prices.length; i++) {
    //buy[i] = Math.max(sell[i-2] - prices[i], buy[i-1])
    //sell[i-2] - prices[i] -> buy after a 1 day cooldown
    //buy[i-1] -> cooldown
    buy = Math.max(prevSell - prices[i], buy);
    //sell[i - 1]
    prevSell = sell;
    //sell[i] = Math.max(buy[i]+prices[i], sell[i-1])
    //buy[i] + prices[i] => sell the stock
    //sell[i-1] => cooldown
    sell = Math.max(buy + prices[i], sell);
  }
  return sell;
};
