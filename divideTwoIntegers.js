/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  const isDividendNegative = dividend < 0;
  const isDivisorNegative = divisor < 0;
  const denominator = isDivisorNegative ? -divisor : divisor;
  let numerator = isDividendNegative ? -dividend : dividend;
  let result = 0;

  while (numerator >= denominator) {
    numerator -= denominator;
    result++;
  }

  if (result !== 0 && ((isDividendNegative && !isDivisorNegative) || ((isDivisorNegative && !isDividendNegative)))) {
    result = -result
  }

  const minRange = -Math.pow(2, 31);
  const maxRange = Math.pow(2, 31) - 1;
  if (result < minRange || result > maxRange) {
    result = Math.pow(2, 31) - 1;
  }

  return result;
};
