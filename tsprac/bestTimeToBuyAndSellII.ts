function maxProfit(prices: number[]) : number {
  var profit : number = 0;
  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(prices[i] - prices[i - 1], 0);
  }
  return profit;
}
// Leetcode 122
// This is similar to the previous one and also a mix of 
// robber houses. Idea is to figure out immediate profit that can be
// made and then continue trading while there are still days left in the week
// there can be one sale or more
// This is a sum of maximum subarrays problem
// Should try if A[i + 1] < A[i] -> buy 
// if A[i + 1] > A[i] -> sell and store in prevSell, as Math.max(prevSell, newVal)
// prevSell != profit ? profit = profit + prevSell : profit
