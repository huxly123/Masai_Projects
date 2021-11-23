class Store{
    constructor(reducer, initState) {
       
        this.reducer = reducer;
        this.state=initState
    }
    getState() {
        return this.state
    }
    dispatch(action){
    this.state=this.reducer(this.state,action)
}
}



const reducer = (state, action)=>{
    if (action.type === "INC_COUNT") {
        return {
        count:state.count+action.payload
        }
       
    }
    if (action.type === "DEC_COUNT") {
        return {
             count:state.count-action.payload
         }
     }
    return {}
}

const init = { count: 0 };

const store = new Store(reducer, init);

store.dispatch({ type: "INC_COUNT", payload: 10 });

store.dispatch({ type: "DEC_COUNT", payload: 1 });




console.log(store.getState());