// // let arr = [[1, 2], [2, 4], [3, 5]]
// // let n = [2, 2]
// const arr = ["a", "b", "d"];

// let start = 2;
// let deleteCount = 0;
// arr.splice(start, deleteCount, "c");
// console.log(arr);

// let printname = new Promise((res, rej)=>{
//   return res("ho")
// })
// console.log(printname);
// printname.then((data) => {
//     console.log("data",data);
// })

// let arr = [1, 2, 3, 4, 5, 6, 7]

// // console.log(arr.slice(2,5));
// arr.splice(2, 2, "rr");
// // console.log(arr);
// const post = [
//   {
//     title: "one",
//     body: "post one",
//   },
//   {
//     title: "one",
//     body: "post one",
//   },
// ];

// function getPosts() {
//     setTimeout(() => {
//         let output = '',
        
//     },1000)
// }

// function first(value, cb) {
    
// }

// function second(value, cb) { }

// function third(value, cb) {}

// var head = {
//     data: 1,
//     next:null
// }

// head.next = {
//     data: 2,
//     next:null
// }

// console.log(head);

class LinkedList{
    constructor(value) {
        this.data = value,
            this.next=null
    }
}
let head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next=new LinkedList(3)
// console.log(head);

function printList(head) {
    while (head !== null) {
        console.log(head.data);
        head=head.next
    }
}
printList(head)