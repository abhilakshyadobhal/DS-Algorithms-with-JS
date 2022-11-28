/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p == null || !p.length) {
        return [];
    }
    let i = 0,
        j = 0;
    const hash = {};
    const temp_hash = {};
    let c = false;
    const ans = [];
    const size = p.length;
    for (let k = 0; k < p.length; k++) {
        if (hash[p.charAt(k)]) {
            hash[p.charAt(k)] += 1;
        } else {
            hash[p.charAt(k)] = 1;
        }
    }

    while (j < s.length) {
        if (temp_hash[s.charAt(j)]) {
            temp_hash[s.charAt(j)] += 1;
        } else {
            temp_hash[s.charAt(j)] = 1;
        }
        if (j - i + 1 < size) {
            j++;
        } else {
            //compare two hashmaps if they have same freq then its a anagram
            for (let k in hash) {
                if (hash[k] === temp_hash[k]) {
                    c = true;
                } else {
                    c = false;
                    break;
                }
            }
            if (c) {
                ans.push(i);
            }
            j++;
            temp_hash[s.charAt(i)] > 1
                ? (temp_hash[s.charAt(i)] -= 1)
                : delete temp_hash[s.charAt(i)];
            i++;
        }
    }

    return ans;
};
