

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = []; //["apple", "cat", "banana", 'kitten']

  this.nodeEdges = [] //[["cat', 'banana'],["apple"],[], [],  []]
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  //addEdge("apple", "cat")
    //this is undirected, so we have to add connections for both inputs.  
  var edges = this.nodeEdges;
  _.each(this.nodes, function(val, index, col) {
    if(val === fromNode) {
      if (edges[index] === undefined) {
        edges[index] = [];
      }
      //debugger;
      edges[index].push(toNode);
      
    }
    if (val === toNode) {
      if (edges[index] === undefined) {
        edges[index] = [];
      }
      edges[index].push(fromNode);
    }
  })
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes.push(node);
  this.nodeEdges.push([]);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var found = false;
  _.each(this.nodes, function (val, index) {
    if ( val === node ) {
      found = true;
    }
  });
  return found;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  //traverse this.nodes, match input to each node => remove that node
  _.each(this.nodes, function(val, index, collection) {
    if (val === node) {
      collection.splice(index, 1);
    }
  });
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var found = false;
  var currentEdges = this.nodeEdges;
  _.each(this.nodes, function(val, index, col) {
    if (val === fromNode) {
      _.each(currentEdges[index], function(target, i, edges) {
        if (target === toNode) {
          found = true;
          return;
        }
      })
    }
  });
  return found;
};



// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var edges = this.nodeEdges;
  _.each(this.nodes, function(val, index, col) {
    if(val === fromNode) {
      if (edges[index] === undefined) {
        edges[index] = [];
      }
      //similar to adding edge, look through node indices and remove node edge.
      //edges[index].push(toNode);
      //if (edges[index] === fromNode)
      _.each(edges[index], function (targetNode, i) {
        if (targetNode === toNode) {
           edges[index].splice(i, 1);
        }
      });
    }
    if (val === toNode) {
      if (edges[index] === undefined) {
        edges[index] = [];
      }
      //edges[index].push(fromNode);
      _.each(edges[index], function (targetNode, i) {
        if (targetNode === fromNode) {
           edges[index].splice(i, 1);
        }
      });
    }
  })
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



