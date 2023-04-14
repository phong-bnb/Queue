"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.enqueue = function (data) {
        this.container.push(data);
    };
    Queue.prototype.dequeue = function () {
        return this.container.shift();
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
