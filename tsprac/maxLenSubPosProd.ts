function getMaxLen(nums: number[]) : number {
  const n = nums.length;
  let lp = 0, rp = 0;
  let ll = 0, rl = 0;
  let ans = 0;
  const sign = (num: number): number => (num === 0 ? 0 : num > 0 ? 1 : -1);
  for (let i = 0; i < n; i++) {
    if (lp === 0) {
      lp = 1;
      ll = 0;
    }
    if (rp === 0) {
      rp = 1;
      rl = 0;
    }
    lp *= sign(nums[i]);
    ll++;
    rp *= sign(nums[n - i - 1]);
    rl++;
    ans = Math.max(ans, 
      lp > 0 ? ll : Number.MIN_SAFE_INTEGER,
      rp > 0 ? rl : Number.MIN_SAFE_INTEGER
    );
  }
  return ans;
} 
