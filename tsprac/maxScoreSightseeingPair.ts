function maxScoreSightseeingPair(values: number[]) : number {
  var maxScore : number = Number.MIN_SAFE_INTEGER;
  var curBest : number = Number.MIN_SAFE_INTEGER;
  var i : number = 0;
  for (let j = 0; j < values.length; j++) {
    maxScore = Math.max(maxScore, curBest + values[j] + i - j);
    if (curBest + i - j < values[j]) {
      curBest = values[j];
      i = j;
    }
  }
  return maxScore;
  // pair calc = values[i] + values[j] + i - j;
};
