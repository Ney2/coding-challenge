/**
 * @param {number} k
 */
 var MyCircularDeque = function(k) {
    let arr = new Array(k);
    this.arr = arr;
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.capacity = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
 MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) {
        return false;
    }
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.arr[this.front] = value;
    this.size++;
    return true;  
};


/** 
 * @param {number} value
 * @return {boolean}
 */
 MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) {
        return false;
    }
    this.arr[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
 MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;  
};

/**
 * @return {boolean}
 */
 MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) {
        return false;
    }
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
    this.size--;
    return true;  
};

/**
 * @return {number}
 */
 MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.arr[this.front];  
};

/**
 * @return {number}
 */
 MyCircularDeque.prototype.getRear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.arr[(this.rear - 1 + this.capacity) % this.capacity];    
};

/**
 * @return {boolean}
 */
 MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;  
};

/**
 * @return {boolean}
 */
 MyCircularDeque.prototype.isFull = function() {
    return this.size === this.capacity;    
};