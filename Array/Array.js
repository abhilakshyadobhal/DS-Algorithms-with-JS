class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  getElementAtIndex(index) {
    return this.data[index];
  }
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  deleteAt(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  insertAt(item, index) {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }
}
const array = new Array(); //we are instantiating an object of Array class
array.push(12);
array.push(13); //pushing element
array.push(14);
array.push(10);
array.push(989);
array.pop(); //Popping element 989

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const nums = [5, 5, 5, 5];
const k = 10;
var subarraySum = function () {
  const map = {};
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[Number(nums[i])]) {
      map[Number(nums[i])] = map[Number(nums[i])] + 1;
    } else {
      map[Number(nums[i])] = 1;
    }
  }

  const c = Object.keys(map);

  if (c.length === 1) {
    if (map[k - Number(c[0])]) {
      return map[k - Number(c[0])] - 1;
    }
  }

  for (key in map) {
    if (map[k - Number(key)]) {
      console.log(key, map[k - Number(key)], map);
      // ans.push(map[key],map[+key + +k])
      ans++;
    }
  }
};

console.log(subarraySum());
