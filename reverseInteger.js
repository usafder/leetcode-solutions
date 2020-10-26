/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let result = 0;
  if (x >= 0 && x <= (Math.pow(2, 31) - 1)) {
    result = Number(x.toString().split('').reverse().join(''));
  } else if (x < 0 && x >= -Math.pow(2, 31)) {
    result = x.toString().replace('-', '').split('').reverse().join('');
    result = -Number(result);
  }

  return result
};
