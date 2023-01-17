/*
 * 
  The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), 
  and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

  The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

  If a[i] > b[i], then Alice is awarded 1 point.
  If a[i] < b[i], then Bob is awarded 1 point.
  If a[i] = b[i], then neither person receives a point.
 
  Complete the 'compareTriplets' function below.  
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 * 
 * Example:
 * a = 5 6 7
   b= 3 6 10
   output = 1 1
 */

function compareTriplets(a, b) {
  let output = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) output[0] = output[0] + 1;
    else if (a[i] < b[i]) output[1] = output[1] + 1;
  }

  return output;
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
