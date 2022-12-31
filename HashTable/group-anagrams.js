/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    if (strs == null) {
        return [];
    }
    const hash = {};

    for (let i = 0; i < strs.length; i++) {
        let key = [...strs[i]].sort().join('');
        if (hash[key]) {
            hash[key].push(strs[i]);
        } else {
            hash[key] = [strs[i]];
        }
    }

    return Object.values(hash);
};
