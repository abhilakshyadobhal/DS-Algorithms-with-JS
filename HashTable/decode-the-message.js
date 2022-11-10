/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    const str = key.replace(/ /g, '');
    const hash = {};
    let res = '';
    let x = 65;
    for (let i in str) {
        if (!hash[str.charAt(i)]) {
            hash[str.charAt(i)] = String.fromCharCode(x).toLowerCase();
            x += 1;
        }
    }

    for (let j in message) {
        res = res + (hash[message.charAt(j)] || ' ');
    }

    return res;
};
