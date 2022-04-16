const { ADD_FUND, WITHDRAW_FUND } = require("./constant");


export const rootReducer = (prevState,action)=>{
    let newState = prevState;
    switch(action.type){
        case ADD_FUND:
          //newState = newState + action.amount;
          newState += action.amount;
          break;
        case WITHDRAW_FUND:
          //newState = newState - action.amount;
          newState -= action.amount;
          break;
        default:
    }
  
    return newState;
  }
