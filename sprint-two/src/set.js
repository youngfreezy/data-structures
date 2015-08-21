var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if (this.storage === undefined) {
    this.storage = {};
  }
  this.storage[item] = item;
};

setPrototype.contains = function(item){
  return this.storage[item] === item;
};

setPrototype.remove = function(item){
  this.storage[item] = undefined;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
