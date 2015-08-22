var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //limited Array keeps you from expanding the array's length. 
};

HashTable.prototype.insert = function(k, v){
  //this tells you which bucket to go to in the limited array.  K, the key, gives you the value.  
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(i, v);
  //base case => bucket is empty
  var bucket = this._storage.get(i);
  var list = [];

  if (bucket === undefined) {     //if current bucket has no array
        // make a new array
    list.push([k,v]);            // add our new value to the list
    this._storage.set(i, list)     // push the new list back to the bucket
  }else {                          //else..bucket contains a list
    //debugger;
    bucket.push([k,v]);   
                                //add value v to the tail of that list
    this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  //first time you use key, you pass in the function to find the right bucket.  the second time, the key tells you which key/value pair to look at in the linkedlist.  
  // i is the hashed key.  tupleArray contains tuples.
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this is going to give us a "bucket":
  var tupleArray = this._storage.get(i);
  var answer = null;
  _.each(tupleArray, function(tuple, index) {   //tuple => [k, v]
    var counter;
    if(tuple[0] === k) {
      answer = tuple[1];
    }
  });
  return answer;
  //add linkedlist lookup


  //check i in the linkedlist (the second time) to know which key in the linked list contains the right value. 
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tupleArray = this._storage.get(i);

  _.each(tupleArray, function(tuple, index, array) {
    if(k === tuple[0]) {
      tupleArray.splice(index, 1);
    }
  });
  this._storage.set(i, tupleArray);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


