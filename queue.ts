export class Queue <T>{
    container: T[] = []
    constructor() {
    }
    enqueue(data: T){
        this.container.push(data)
    }
    dequeue(): T | null{
        return this.container.shift()
    }
    size(){
        return this.container.length
    }
}
let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue())