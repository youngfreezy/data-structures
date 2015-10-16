var HashTable = function () {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;

  if (this._size > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
      if (this._size < this._limit * 0.25) {
        this._resize(Math.floor(this._limit / 2));
      }
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype._resize = function (newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(this._redistribute.bind(this));
};

HashTable.prototype._redistribute = function (bucket) {
  if (!bucket) {
    return;
  }
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    this.insert(tuple[0], tuple[1]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

//////////////////////////////////////////////////////////////////
// Higher-Order Fuction implementation
//////////////////////////////////////////////////////////////////

// var HashTableHOF = function () {
//   this._size = 0;
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTableHOF.prototype.insert = function (k, v) {
//   return this._tupleSearch(k,
//     function (bucket, tuple, i) {
//       tuple[1] = v;
//     },
//     function (bucket) {
//       bucket.push([k, v]);
//       this._size++;
//       if (this._size > 0.75 * this._limit) {
//         this._resize(this._limit * 2);
//       }
//     }
//   );
// };

// HashTableHOF.prototype.retrieve = function (k) {
//   return this._tupleSearch(k,
//     function (bucket, tuple, i) {
//       return tuple[1];
//     });
// };

// HashTableHOF.prototype.remove = function (k) {
//   return this._tupleSearch(k,
//     function (bucket, tuple, i) {
//       bucket.splice(i, 1);
//       this._size--;
//       if (this._size < 0.25 * this._limit) {
//         this._resize(Math.floor(this._limit / 2));
//       }
//       return tuple[1];
//     });
// };

// HashTableHOF.prototype._tupleSearch = function (key, foundCB, notFoundCB) {
//   var index = getIndexBelowMaxForKey(key, this._limit);
//   var bucket = this._storage.get(index) || [];

//   this._storage.set(index, bucket);

//   for (var i = 0; i < bucket.length; i++) {
//     var tuple = bucket[i];
//     if (tuple[0] === key) {
//       return foundCB.call(this, bucket, tuple, i);
//     }
//   }

//   return notFoundCB ? notFoundCB.call(this, bucket) : null;
// };

// // These two functions are identical to the original implementation
// // Reuse them by referencing the same function instances - neat-o!
// HashTableHOF.prototype._resize = HashTable.prototype._resize;
// HashTableHOF.prototype._redistribute = HashTable.prototype._redistribute;