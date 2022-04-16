import { ADD_FUND, WITHDRAW_FUND } from "./constant"



export const addFundActionCreator = (amt)=>{ // amt = formal argument
    return {
        type:ADD_FUND,
        amount:amt
    }
}
export const withdrawFundActionCreator = (amt)=>{ // amt = formal argument
    return {
        type:WITHDRAW_FUND,
        amount:amt
    }
}
