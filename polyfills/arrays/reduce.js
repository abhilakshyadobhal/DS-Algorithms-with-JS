Array.prototype.customReduce = function (cb, initialValue) {
    const n = this.length;
    let res = initialValue || initialValue === 0 ? initialValue : this[0];

    for (let i = 0; i < n; i++) {
        let temp = cb(res, initialValue ? this[i] : this[i + 1], i);
        if (temp) {
            res = temp;
        }
    }
    return res;
};

const ans = [15, 16, 17, 18, 19].customReduce((acc, curr, idx) => acc + curr);
