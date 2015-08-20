var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //create a storage and length;
  this.storage = {};
  this.length = 0;

 
}

 //LIFO: pushing on the top
Stack.prototype.push = function(val){

  this.storage[this.length] = val;
    this.length++;
};
  //popping of the top.
Stack.prototype.pop = function(){
  if (this.length) {
    this.length--;
    return this.storage[this.length];
  };
};

Stack.prototype.size = function(){
  return this.length;
}


// call like this: var stack = new Stack():