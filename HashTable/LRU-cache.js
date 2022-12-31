/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.hash = new Map();
    this.capacity = capacity;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.hash.has(key)) {
        let val = this.hash.get(key);
        this.hash.delete(key);
        this.hash.set(key, val);
        return this.hash.get(key);
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.hash.has(key)) {
        this.hash.delete(key);
    }
    this.hash.set(key, value);
    if (this.hash.size > this.capacity) {
        this.hash.delete(this.hash.keys().next().value);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
