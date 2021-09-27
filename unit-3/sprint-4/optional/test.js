const nodedata=class Node{
    constructor(ele){
this.element=ele;
this.next=null
    }
}
const node=new nodedata(5)

class LinkedList{
constructor(){
    this.head=null;
    this.size=0;

}
 add(element){
let node =new nodedata (element);
if(this.head==null){
    this.head=node
    
}else{
   let current=this.head
   while(current.next!=null){
       current=current.next
   }
   current.next=node;
}
this.size++
}
printList(){
    let current=this.head;
    let index=0;
    while(current!=null){
        console.log("element:"+current.element +"index:"+index++);
        current=current.next
    }
}

isEmpty(){
    console.log(this.size==0?true:false); 
}
sizeofLL(){
    console.log(this.size);
}
insertAt(element,index){                      //2 insertat 2place
    let node=new nodedata(element);
    let prev=null;
    // let after=null
    let current=this.head;
    let i=0
    if(index==0){
        current.next=this.head;
        current=node
    }else{
        while(i<index){                   //i=2  will get break
            prev=current;                    //prev=4  curr=5
            current=current.next
        
            i++;
        }
     prev.next=node;                   

     prev=prev.next                  //converting prev  to node
prev.next=current;
this.size++

    }
}
removeElement(element){
let prev=null;
let current=this.head;
while(current!=null){
if(current.element==element){
    if(prev==null){
        this.head=current.next
    }
    else{
        prev.next=current.next
    }
    this.size--;
   break
}

    prev=current;
    current=current.next
}
}
}

let ll=new LinkedList

ll.add(3);
ll.add(4)
ll.insertAt(2,1)
ll.removeElement(2)
ll.printList()
//ll.isEmpty()
//ll.sizeofLL()
 //console.log(ll);