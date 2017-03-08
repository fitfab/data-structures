function LinkedList() {
    this.head = null;
}

LinkedList.prototype.isEmpty = function() {
    return this.head === null;
}

LinkedList.prototype.size = function() {
    let count = 0;
    // create new pointer to NOT loose the beging of the head
    let curr = this.head;

    // Traverse of the list and increase count
    while (curr !== null) {
        count++;
        curr = curr.next;
    }
    return count;
}

LinkedList.prototype.prepend = function(val) {
    // 1. create new node wtih val
    let newNode = {
        data: val,
        // 2. make the newnode's next point to  current head
        next: this.head
    };
    // 3. update this.head to point to new nodde
    this.head = newNode;
}

LinkedList.prototype.append = function(val) {
    // 1. create new node with next point to null
    // since this going to be at the end of list
    let newNode = {
        data: val,
        next: null
    };

    let curr = this.head;

    // if empty attach it to head and return
    if(this.isEmpty()) {
        this.head = newNode;
        return
    }

    // 2. Traverse to the end of the list
    while (curr.next !== null) {
        curr = curr.next;
    }

    // 3. Make last node's next value point to new node
    curr.next = newNode;
}

LinkedList.prototype.contains = function (val) {
    let curr = this.head;
    while (curr !== null) {
        if (curr.data === val) {
            return true;
        }
        curr = curr.next;
    };

    return false;
};

LinkedList.prototype.remove = function(val) {
    let prev = null;
    let curr = this.head
    if (!this.contains(val)) {
        return;
    }
    // if the value is at the head
    if (this.head.data === val) {
        this.head = this.head.next;
        return;
    }

    // otherwise is not 1st node
    while (curr.data !== val) {
        prev = curr;
        curr = curr.next;
    }

    prev.next = curr.next
}

// Try out: node linked-list.js
let list = new LinkedList();

// append
list.append(20);
list.append(10);
list.append(7);
list.append(5);
console.log(list)

// add at the top the list
list.prepend(25);

// check methods
console.log('-- isEmpty: ',list.isEmpty());
console.log('-- size: ',list.size())
console.log('-- contains 5 : ',list.contains(5))

// rmeoves nodes top and anywhere in the list
list.remove(7)
list.remove(20)
console.log('-- contains 7: ',list.contains(7))
console.log(list)
