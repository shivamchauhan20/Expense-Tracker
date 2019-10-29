export const createExpense = (name,desc,amount,msg,opr,ind)=>{
    return {
        payLoad:{name,desc,amount,msg,ind},
        type:opr
    }
}