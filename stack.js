/*var stack = [];
stack.push(2);       // stack is now [2]
stack.push(5);       // stack is now [2, 5]
var i = stack.pop(); // stack is now [2]
alert(i);            // displays 5

var queue = [];
queue.push(2);         // queue is now [2]
queue.push(5);         // queue is now [2, 5]
var i = queue.shift(); // queue is now [5]
alert(i);              // displays 2
*/  //array
//var array = [2 , 3 , 4, 5];
//system.push(6);
//console.log(array);
/* //string
var array = ['system' , 'openQA' , 'teststackWhite'];
array.push('Window');
console.log(array);
array.pop('Window');
console.log(array);
*/
//อันใหม่ แยกที่ละอัน

function Node(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
}

function Tree(data) {
    var node = new Node(data);
    this._root = node;
}

var tree = new Tree('CEO');
 
// {data: 'CEO', parent: null, children: []}
tree._root;

Tree.prototype.traverseDF = function(callback) {
 
    // this is a recurse and immediately-invoking function 
    (function recurse(currentNode) {
        // step 2
        for (var i = 0, length = currentNode.children.length; i < length; i++) {
            // step 3
            recurse(currentNode.children[i]);
        }
 
        // step 4
        callback(currentNode);
         
        // step 1
    })(this._root);
 
};

Tree.prototype.traverseBF = function(callback) {
    var queue = new Queue();
     
    queue.enqueue(this._root);
 
    currentTree = queue.dequeue();
 
    while(currentTree){
        for (var i = 0, length = currentTree.children.length; i < length; i++) {
            queue.enqueue(currentTree.children[i]);
        }
 
        callback(currentTree);
        currentTree = queue.dequeue();
    }
};


/*var tree = new Tree('one');

tree._root.children[0].children.push(new Node('System'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('OpenQa'));
tree._root.children[0].children[1].parent = tree._root.children[0]; 

tree._root.children.push(new Node('TestStack.White'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('Windows'));
tree._root.children[1].parent = tree;

tree._root.children[2].children.push(new Node('UIItems'));
tree._root.children[2].children[0].parent = tree._root.children[2];

tree._root.children.push(new Node('WindowItem'));
tree._root.children[2].parent = tree;
*/
var tree = new Tree('one');
 
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;
 
tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;
 
tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
 
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];
 
tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];
 
tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

tree.traverseDF(function(node) {
    console.log(node.data)
   
});

