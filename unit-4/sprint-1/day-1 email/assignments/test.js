class LinkedList{
constructor(data){
    this.data=data;
    this.next=null
}
}
class Liked{
    constructor(){
this.head=null;

    }
 addele(data){
   let node=new LinkedList(data);
    if(this.head==null){
        this.head=node;
        
    }else{
       let current=this.head;
       while(current.next!=null){
           current=current.next
       }
       current.next=node
    }
}
rev(){
    let prev=null;      // 5 6 7
    let next=null;           //first loop                 //second loop
    let current=this.head   //5                           //6
    while(current!=null){               
        next=current.next     //6                         //7
current.next=prev         //null                         //5
prev=current;    // /5                                   //6
current=next         //6                                 //7
    }
console.log(prev);
}
print(){
    let current=this.head;
    while(current!=null){
        console.log(current.data);
        current=current.next
    }
}

}
let list =new Liked()
list.addele(5)
list.addele(4)
list.addele(7)
// list.print()
list.rev()