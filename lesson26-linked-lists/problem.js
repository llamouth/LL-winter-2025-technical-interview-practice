var middleNode = function(head) {
    
    let fast = head
    let slow = head

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }

    return slow
};

var hasCycle = function(head) {
    if(!head || !head.next) {return false}


    let slow = head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next

        if(slow == fast){
            return true
        }
    }

    return false
};

var mergeTwoLists = function(list1, list2) {

    const resultList = new ListNode()
    let currentResultNode = resultList

    while(list1 || list2){
        if(list1?.val <= list2?.val || !list2){
            currentResultNode.next = new ListNode(list1?.val)
            list1 = list1.next
        }else {
            currentResultNode.next = new ListNode(list2?.val)
            list2 = list2?.next
        }
        currentResultNode = currentResultNode?.next
    }

    return resultList.next
};

var mergeTwoListsRecursively = function (list1, list2, resultList = new ListNode()) {

    if (!list1 && !list2) {
        return resultList.next
    }
    
    if (list1?.val <= list2?.val || !list2) {
        resultList.next = new ListNode(list1?.val)
        mergeTwoLists(list1.next, list2, resultList.next)
    } else {
        resultList.next = new ListNode(list2?.val)
        mergeTwoLists(list1, list2.next, resultList.next)
    }

    return resultList.next
}