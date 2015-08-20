var Queue = function() {
  this.storage = {};
  this.length = 0;
  this.head = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

//enqueue, dequeue, size
Queue.prototype.enqueue = function(val){
  this.storage[this.length + this.head] = val;
  this.length++;
}

Queue.prototype.dequeue = function(){
  if (this.length) {
    this.length--;
    return this.storage[this.head++];
  };
}

Queue.prototype.size = function(){
  return this.length;
}
//make sure to call with new. that's what makes the this references work!
