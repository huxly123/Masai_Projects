export const Test=()=>{
    return <div><Parent/></div>
}

const Parent=()=>{
    const state="masaischool"
    return <div><Child1 name="child"/></div>
}

const Child1=({name})=>{
    return <h1><Child2 name="eee"/></h1>
}

const Child2=({name})=>{
    return <h1>{name}</h1>
}