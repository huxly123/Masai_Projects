let arr=[3,4,5]
let str=""

for(let i=0;i<arr.length;i++){
    str=str+arr[i]
}
let num=Number(str)
let ans=num+1;
console.log(ans);

while(head){
    arr.push(head.data)
    head=head.next
}
for(let i=0;i<arr.length;i++){
    str=str+arr[i]
}
let num=Number(str)
let ans=num+1; 



let i=1
let current=head;
while(current.next){
    if(i%2!==0){
        if(current.data>current.next.data){
           
            return false;
          
        }
           if(current.data>current.next.data){
           
           
             break;
        }
    }
    else if(i%2===0){
        if(current.data<current.next.data){
            return false;
        
        }
        if(current.data<current.next.data){
          
            break;
        }
    }
    current=current.next;
    i++
}
return true



let arr=[]
let str=""
while(head){
arr.push(head.data)
head=head.next
}
for(let i=0;i<arr.length;i++){
str=str+arr[i]
}
let num=Number(str)
let ans=num+1; 

return ans  