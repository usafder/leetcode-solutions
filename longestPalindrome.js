/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    let result = s[0];
    if (s.length > 1) {
        for (let i = 0; i < s.length - 1; i++) {
            let pal = [s[i]];
            for (let j = i + 1; j < s.length; j++) {
                if (pal.includes(s[j])) {
                    pal.push(s[j]);
                    result = pal.toString().replace(/,/g, '');
                    break;
                } else {
                    pal.push(s[j])
                }
            }
        }
    }

    return result;
};
