 export default class User{
    constructor(name, age) {
        this.name = name
        this.age=age
    }
}

function printName(user) {
    console.log('username is'+user.name);
}

function printAge(user) {
  console.log("userage is" + user. age);
}
export {printAge,printName}
