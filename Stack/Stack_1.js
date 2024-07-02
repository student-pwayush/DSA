class stack {
    // Private properties 
    #arr;
    constructor () {
        this .#arr = []
    }
    push(element){
        this.#arr.push(element);
    }
    pop () {
        this.#arr.pop();
    }
    top (){
        return this.#arr[this.#arr.length - 1];
    }
}
let s = new stack ();
s.push (10);
s.push(20);
s.push(30);
console.log(s.top());
s.pop();
console.log(s.top());
s.pop();
console.log(s.top());