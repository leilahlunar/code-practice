function maxProduct(nums: number[]): number {
  var maxProd:number = Number.MIN_SAFE_INTEGER;
  var len = nums.length;
  var l = 0;
  var r = 0;
  for(let i = 0; i < len; i++){
    l = (l === 0 ? 1 : l) * nums[i];
    r = (r === 0 ? 1 : r) * nums[len - 1 - i];
    maxProd = Math.max(maxProd, Math.max(l, r));
  }
  return maxProd;
}
