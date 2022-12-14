/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s == null || !s.length) {
        return '';
    }
    let i = 0,
        j = s.length - 1,
        temp;
    const str = s.split('');
    const hash = { a: true, e: true, i: true, o: true, u: true };

    while (i < j) {
        if (hash[str[i].toLowerCase()] && hash[str[j].toLowerCase()]) {
            temp = str[i];
            str[i] = str[j];
            str[j] = temp;
            i++;
            j--;
        } else if (hash[str[i].toLowerCase()] && !hash[str[j].toLowerCase()]) {
            j--;
        } else {
            i++;
        }
    }
    return str.join('');
};
