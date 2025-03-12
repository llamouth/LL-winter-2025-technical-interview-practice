// Below we provided a partially completed linked list with the push and display method. Create the basic operations for a linked list
// get method
    // given an index return the node at that index
    // if the index is less than zero or greater or equal to the length return null
    // return the node once found
// pop method 
    // removes the last node in the linked list and returns the new tail;
    // if the linked list is empty than return undefined
// shift method
    // if the linked list is empty return undefined
    // removed the first node in the linked list
    // returns the new head
// unshift method
    // takes a value and add the new node to the linked list
    // the head should be the new node
    // return the linked list
// insert method
    // given an index add a new node at that index
    // return linked list
// remove method
    // given an index remove the node at that index
    // return the node now at that index

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  shift(){
    if (!this.head) { return undefined }
    this.head = this.head.next
    return this.head
  }

  unshift(data){
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    return this
  }

  pop() {
    if (!this.head) { return undefined }
    
    let node = this.head

    while (node.next.next) {
      node = node.next
    }
    node.next = null
    return node

  }

  get(index) {
    if (!this.head || index < 0) { return undefined }
    
    let count = 0
    let currentNode = this.head

    while (currentNode) {
      if (count == index) { return currentNode }
      count++
      currentNode = currentNode.next
    }
    return undefined
  }

  insert(index, data){

  }

  remove(index){
    if (index == 0) {
      this.head = this.head.next
      return this.head
    }

    let count = 1
    let currentNode = this.head

    while (currentNode) {
      if (count === index) {
        currentNode.next = currentNode.next.next
        return currentNode.next
      }
      count++
      currentNode = currentNode.next
    }

  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
module.exports = LinkedList;
