const obj = {
    a: 1,
    b: 2,
    c: {
        d: {
            e: {
                f: 10,
            },
        },
    },
};

const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: {
            e: {
                f: 10,
            },
        },
    },
};

function deepComparision(_obj, _obj2) {
    for (let key in _obj) {
        if (typeof _obj[key] === 'object' && typeof _obj2[key] === 'object') {
            return deepComparision(_obj[key], _obj2[key]);
        } else if (_obj[key] !== _obj2[key]) {
            return false;
        }
    }

    return true;
}

console.log(deepComparision(obj, obj2));
