var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var head = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size + head] = value;
    size += 1;
  };

  someInstance.dequeue = function(){
    if (size > 0) { 
      size -= 1;
      return (storage[head++]);
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
