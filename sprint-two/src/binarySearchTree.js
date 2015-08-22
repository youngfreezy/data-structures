var BinarySearchTree = function(value){
  //parameter value is the value of the current node
  var tree = {};
  _.extend(tree, BSTMethods);
  tree.value = value;
  // each tree has at most two subtrees: left and right
  tree.left = null;
  tree.right = null;

  return tree;
};

var BSTMethods = {}
BSTMethods.insert = function(val) {
  

  //check if val is greater or less than our current node's value (this.value)
  if (val < this.value) {
    //val is less than this.value, add it to the left of the current node
    
    //if this.left is null => we are at a child node. Adding our new node here
    // will not override anything.
    if(this.left === null) {
      
      var child = BinarySearchTree(val); //create a new node with value of val
      this.left = child; //setting current trees left to child (ie a new tree)
    } else{ 
      // Otherwise: this.left has a subtree and we will 
      //  recursively call insert on the left subtree (this.left) with the same value (val)
      this.left.insert(val);
    }
    
  }
  else {  //the val is greater than our current node, we will add it to the right side

    if(this.right === null) { 
      //our current node has no right child
      // we want to create a new subtree, then add that new subtree to this.right
      var rightChild = BinarySearchTree(val);
      this.right = rightChild;
    }
    else {
      //Otherwise, there is a right subtree. We want to recursively call
      // insert on the right subtree (this.right) with val.
      this.right.insert(val);
    }
  }
}

BSTMethods.contains = function(target) {
  //we want to check if the target value is contained within this tree, either 
  // at our current BST or any child's BST
  //if none of the subtrees contain target, return false;

  //if our current BST's value is target, return true
  if (this.value === target) {
    return true;
  }
  else {
    //Otherwise: we want to check either the left or right subtrees by testing
    
    // if the target is less than our current value
    if(target < this.value) {
      //first, we check if the left child is null. If left BST is null,
      // the target does not exist
      if(this.left === null) {
        return false;
      } 
      else {
      //we want to recursively call contains on the left subtree(this.left) with target
        return this.left.contains(target);
      }
    }
    // if the target is greater than our current value
    if(target > this.value) {
      if (this.right === null) {
        return false;
      }
      else {
        return this.right.contains(target);
      }
    }
  }
  // return false;
}

BSTMethods.depthFirstLog = function(callback) {
  //depth first search means...
  //  We will recursively calling callback each node's children 
  //  calling as we go: 

  callback(this.value)
  //first we recursively apply call back to left subtree if it exists<--- this is arbitrary
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  //then we recursively apply callback to the right subtree if it exists
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }


  //finally, we apply our callback to our current value.
  // this waits to call until the end: callback(this.value);
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
