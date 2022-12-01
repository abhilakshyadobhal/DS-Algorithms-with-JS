/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let temp = '';

    const nStr = word2.length > word1.length ? word2 : word1;

    if (word2.length === word1.length) {
        for (let i = 0; i < word1.length; i++) {
            temp += word1[i] + word2[i];
        }
    } else {
        for (let i = 0; i < nStr.length; i++) {
            if (word1[i] && word2[i]) {
                temp += word1[i] + word2[i];
            } else {
                temp += word1[i] ? word1[i] : word2[i];
            }
        }
    }
    return temp;
};

// Alternative approach with null coalecing
const mergeAlternately = (a, b) => {
    const maxLength = Math.max(a.length, b.length);
    let result = '';

    for (let i = 0; i < maxLength; i++) {
        result += (a[i] ?? '') + (b[i] ?? '');
    }

    return result;
};
