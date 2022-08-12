var MyHashMap = function () {
    this.dto = {};
  };
  
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  MyHashMap.prototype.put = function (key, value) {
    this.dto[key] = value;
  };
  
  /**
   * @param {number} key
   * @return {number}
   */
  MyHashMap.prototype.get = function (key) {
  if(this.dto[key]|| this.dto[key]==0){
    return this.dto[key]
  }
  return -1
  };
  
  /**
   * @param {number} key
   * @return {void}
   */
  MyHashMap.prototype.remove = function (key) {
   
    if(this.dto[key] || this.dto[key]==0){
      delete this.dto[key]
      return
    }
    return -1
  
  };
  var obj = new MyHashMap();
  
  obj.put(1, 4);
  