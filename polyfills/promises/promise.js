//requirements
// resolve, reject, this,catch
function customPolyfill(executor) {
    let isFulfilled = false,
        isRejected = false,
        value;

    function resolve(v) {
        value = v;
        isFulfilled = true;
    }
    function reject(v) {
        value = v;
        isFulfilled = false;
        isRejected = true;
    }
    this.then = function (cb) {
        if (typeof cb === 'function') {
            cb(value);
            return this;
        }
    };
    this.catch = function (cb) {
        if (typeof cb === 'function') {
            cb(value);
            return this;
        }
    };
    executor(resolve, reject);
}

const p = new customPolyfill((res, rej) => res(1));
p.then((r) => console.log(r, 's')).then((rs) => console.log(rs, 'sax'));
