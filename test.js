var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (!list.tail) {
      list.tail = newNode;
      list.tail.next = newNode;

      list.head = newNode;
      list.head.next = newNode;
    }
    list.tail.next = newNode;
    list.tail = newNode;

  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = list.head.next;
    return oldHead.value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};



var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(newTree, treeMethods) {
  for (var key in treeMethods) {
    newTree[key] = treeMethods[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChildNode = Tree(value);
  this.children.push(newChildNode);

};

treeMethods.contains = function(target) {
//if there are kids keep calling .contains
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    } else if (this.children[i].length > 0) {
      treeMethods.contains(this.children[i].children);
    }
  }
  return false;
};
