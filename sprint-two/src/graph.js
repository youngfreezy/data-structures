

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  //storing in an object for efficiency. 
  this._nodes = {};
  //this._nodes = {node, {edges: {}}
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.


// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this._nodes[node] = this._nodes[node]  || {edges: {}}
  //addNode(7)
  //this._nodes = {7: {edges: {}}}
 
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return !!this._nodes[node];
  
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //check if it exists:
  if (this.contains(node)) {
    // TODO: Remember to remove edges between node and other connected nodes. 
    //traverse edges and call remove edge
    //do something

    //if it does, delete it: 
    delete this._nodes[node];
  };
  

  

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  if (!this._nodes[fromNode]) {
    return false;
  }

  return !!this._nodes[fromNode].edges[toNode];
  
};


Graph.prototype.addEdge = function(fromNode, toNode){
  if (!this._nodes[fromNode] || !this._nodes[toNode]) {
    return;
  }

  this._nodes[toNode].edges[fromNode] = fromNode;
  this._nodes[fromNode].edges[toNode] = toNode;
  
};
// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
    if (!this._nodes[fromNode] || !this._nodes[toNode]) {
    return;
  }
  delete this._nodes[toNode].edges[fromNode];
  delete this._nodes[fromNode].edges[toNode];
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  for(var key in this._nodes){
    cb(key);
  }
    
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



