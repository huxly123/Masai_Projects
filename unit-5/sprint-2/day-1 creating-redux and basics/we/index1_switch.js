class Store {
  constructor(reducer, initState) {
    this.reducer = reducer;
    this.state = initState;
  }
  getState() {
    return this.state;
  }
  dispatch(action) {
    this.state = this.reducer(this.state, action);
  }
}

const reducer = (state, action) => {
    switch (action.type) {
        case ( "INC_COUNT"):
        return {
              ...state,
                count: state.count+action.payload
            }
        case ("DEC_COUNT"):
        return {
              ...state,
                count:state.count-action.payload
        }
      
      case ("ADD_TODO"):
        return {
          ...state,
          todos:[...state.todos,action.payload]
        }
        default: return state
    
}
};

const init = { count: 0,todos:[] };

const store = new Store(reducer, init);

store.dispatch({ type: "INC_COUNT", payload: 10 });

store.dispatch({ type: "DEC_COUNT", payload: 1 });
console.log(store.getState());
store.dispatch({
  type: "ADD_TODO",
payload:{id:1,status:false,title:"Learn Redux"}
})

console.log(store.getState());
