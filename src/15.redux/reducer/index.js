const initState = {
  counter: 0
}

const numReducer = (state = initState,action) => {
  switch (action.type) {
    case "ADD_NUM":
      return {...state,counter:state.counter + action.payload}  
    case "INCRE_NUM":
      return {...state,counter:state.counter - action.payload}
    default:
      return state
  }
}

export default numReducer