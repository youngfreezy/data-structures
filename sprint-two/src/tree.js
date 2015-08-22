var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = null;  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

// your code here
// newTree.children = null;  // fix me
// main difference between this and a linkedlist is that instead of node.next, there is an array of children.

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  //it's not just value, you need it to refrence the constructor above, which can be referenced with this.
  if(this.children !== null){
    this.children.push(tree);
  } else { 
    this.children = [tree];
  }
};

treeMethods.contains = function(target){
//check the entire tree recursively for the target
  if (target === this.value) {
    return true;
  }
  if (this.children === null) {
    return;
  }
  for (var i = 0; i < this.children.length ; i++) {
      if (this.children[i].contains(target)){
        return true;
      }
  };
  return false;
//return a boolean
};


/*
 * Complexity: What is the time complexity of the above functions?
 linear
 */
//Tree(5);
//{value:5, children: null}
//if children is null we are at the bottom.  same as if node.next is null.  