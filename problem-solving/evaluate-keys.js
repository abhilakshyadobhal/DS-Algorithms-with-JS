/**
 * Given the object below write a function that evaluates the keys function and update them with result
 */
const obj = {
    a: {
        b: (a, b, c) => a + b + c,
        c: (a, b, c) => a + b - c,
    },
    d: (a, b, c) => a - b - c,
};

function check(obj2, args) {
    for (key in obj2) {
        if (typeof obj2[key] === 'function') {
            obj2[key] = obj2[key](...args);
        }
        if (typeof obj2[key] === 'object') {
            check(obj2[key], args);
        }
    }
}

function n(...args) {
    const data = check(obj, args);
}

n(1, 1, 1);
console.log(obj);
