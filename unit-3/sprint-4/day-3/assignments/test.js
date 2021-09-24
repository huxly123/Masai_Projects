// const n1={data:100};
// const n2={data:100}
// n1.next=n2;
// console.log(n2);

class Node{
    constructor(data,next=null){
this.data=data;
this.next=next
    }
}
class Linkedlist{
    constructor(){
        this.head=null;
       // this.size=0;
    }

//insert first node:
insertFirst(data){
    this.head=new Node(data,this.head);
    this.size++;
}

//insert last node

InsertLast(data){
let node=new Node(data);
let current;

//if empty,make head

if(!this.head){
    this.head=node;
}else{
    current=this.head;
    while(current.next){
        current=current.next
    }

    current.next=node
}
this.size++
}





//print list data
printListData(){
let current=this.head;
while(current){
console.log(current.data);
current=current.next;
}
}
}
const ll=new Linkedlist();
ll.insertFirst(100);
ll.insertFirst(200)
ll.insertFirst(300)
ll.InsertLast(400)

ll.printListData()