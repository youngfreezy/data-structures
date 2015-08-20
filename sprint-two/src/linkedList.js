var LinkedList = function(){
  //very similar to an array, just without indices, optimized for lookup/re-shuffling.
  //this is a constant remove/add versus an array, which is linear.
  //if you are doing a lot of adding and removing, this is ideal. 
  //if you're doing lookups, an array/object is better - the lookups are constant.
  //lookups are linear here.  
  var list = {};
  //only thing list gives you is a head and tail. nothing else. why would you want
  //to return the entire list, that would just give you an object - pointless. 
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //create the new node. user doesn't create a node, this function does.
    //this instantiation below is prepoulated with value and next "values" as per lines 34-35
    var node = Node(value);
    //this is the previous tail, we are now pointing the previous tail to the new node created.
    if(list.tail === null) {
      list.tail = node;
      list.head = node;  
    } else {
      // if there is a tail, leave the head as is, and only update the tail, while also
      //updating the pointer (next)
      list.tail.next = node;
      // this is a way of updating the tail pointer
      // setting line 11 to the tail. 
      list.tail = node;
    }
    
  };

  list.removeHead = function(){
    //what if there are no nodes yet? don't do anything. 
    if (list.head === null) {
      return;
    };
    //fifo removal.  remove/return the old head, while updating the head to the next node.
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target){
    //use pointers to search the list
    //while any of the nodes are not null, look up the values
    var node = list.head;
    while (node !== null){
      if (node.value === target) {
        return true;
      };
      node = node.next;

    }
    //this works for target matching and also if the list is empty.  
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
