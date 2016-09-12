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
	// if there is no first node, add a first node and kill the function
	if (!this.head) {
		this.head = nodeToAdd;
		return;
	}
	
	var currentNode = this.head; 
	while(currentNode.next) {
		currentNode = currentNode.next;
		currentNode.next = nodeToAdd;
	}
	return nodeToAdd;
}


var ll = new LinkedList();


ll.addNode("Vikash") 
console.log(ll) //-> {value: "vikash", next: null} 