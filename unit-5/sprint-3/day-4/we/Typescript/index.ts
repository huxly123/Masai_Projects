let a:number = 3;
let b:number=4
function gett(c:number,d:number) {
    return c+d
}

console.log(gett(a,b));

const person = {
    name: "masai",
    age: 14,
    getAge: () => {
        return 4
    }
}

const personage = person.getAge()
console.log(personage);


interface Todo{
    title: string,
    status:boolean
}

const todo: Todo = {
    title: "helo",
    status:true
}