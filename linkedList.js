var Node = function (value) {
	this.value = value;
	this.next = null; 
}

var LinkedList = function () {
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.addNode = function (content) {
	var nodeToAdd = new Node(content); 
	var currentNode = this.head;
	// if there is no first node, add a first node and kill the function
	if (!this.head) {
		this.head = nodeToAdd;
		this.tail = nodeToAdd;
		return;
	}
	
	if(!currentNode){
		currentNode = nodeToAdd;
		// this.length++;
		this.head = currentNode;
	}

		
	while(currentNode.next) {
		currentNode = currentNode.next;
	}
	currentNode.next = nodeToAdd;
	this.tail = nodeToAdd;
	return nodeToAdd;
}


var ll = new LinkedList();


ll.addNode("Vikash"); 
ll.addNode("Marcel"); 
ll.addNode("Newey"); 
console.log(ll) //-> {value: "vikash", next: null} 
console.log("hi")
console.log(ll)