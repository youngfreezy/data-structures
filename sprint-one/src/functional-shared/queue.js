var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.length = 0;
  //to point at most bottom value:
  obj.head = 0;
  _.extend(obj, queueMethods);

  return obj;
};

var queueMethods = {
  enqueue : function(val){
    this.storage[this.length + this.head] = val;
    this.length++;
  },

  dequeue : function(){
    if (this.length) {
      this.length--;
      return this.storage[this.head++];
    };
  },

  size : function(){
    return this.length;
  }
};


