export const expenseRed = (initState={expenses:[],editExpense:{}},action)=>{
console.log('Action is ',action);
if(action.type==='add'){
    var expense=[...initState.expenses];
     expense.push(action.payLoad);
    //  var unique = expense
    //    .map(e => e.ind)
    // .map((e, i, final) => final.indexOf(e) === i && i)
    // .filter(e => expense[e]).map(e => expense[e]);
    const filteredArr = expense.reduce((acc, current) => {
      const x = acc.find(item => item.ind === current.ind);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
     var ex = filteredArr.sort((a,b)=>(a.ind>b.ind?1:-1));
     console.log('Expense is ',ex);  
   return initState={expenses:ex};
}
if(action.type==='edit'){
    // console.log('Init Expense is ',initState.expenses);
    console.log('Action Payload is ',action.payLoad);
   var updatedExpenses = initState.expenses.map(y=>y);
   //  console.log('Updated Expenses is ',updatedExpenses);
   var index = updatedExpenses.findIndex(obj=>obj.ind===action.payLoad.ind);
   //console.log('Update Index is ',index);
    updatedExpenses.splice(index,1);
  // console.log('Index is ',index);
   var e = action.payLoad;
   return initState={expenses:updatedExpenses,editExpense:e};
}
return initState;
}   