// Write a function that takes the head node of a manually linked set of nodes. Reverse the direction of the next pointers and return the new head node
// input: 1 -> 2 -> 3 -> null output: 3 -> 2 -> 1 -> null
// input: 1 -> null output: 1 -> null

// head will not be null;
class Node {
    constructor(data = null) {
        this.data = data
        this.next = null
    }
}

module.exports = function reverseNodes(head){
    let currentNode = head;
    let previousNode = null;
    let nextNode;

    while(currentNode){
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    return previousNode
};