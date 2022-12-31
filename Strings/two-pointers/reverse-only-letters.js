/**
 * @param {string} s
 * @return {string}
 *
 * Approach - Take two pointers one start and other at end. Swap will only be made if both are letters.
 *            if char at i is not letter then i++ and j will wait at same position and vice versa.
 */
var reverseOnlyLetters = function (s) {
    const str = s.split('');
    let temp;

    let i = 0,
        j = str.length - 1;

    const checkLetter = (s) => {
        return s.toLowerCase() !== s.toUpperCase();
    };

    while (i < j) {
        if (checkLetter(str[i]) && checkLetter(str[j])) {
            temp = str[i];
            str[i] = str[j];
            str[j] = temp;
            i++;
            j--;
        } else if (!checkLetter(str[i])) {
            i++;
        } else {
            j--;
        }
    }
    console.log(str.join(''));
};
