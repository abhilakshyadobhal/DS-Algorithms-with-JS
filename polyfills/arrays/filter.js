const arr = [1, 2, 4, 5, -1, -1, -5];

Array.prototype.myFilter = function (cb) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i)) {
            result.push(this[i]);
        }
    }
    return result;
};

const res = arr.myFilter((cur, i) => cur > 0);
console.log(res);
