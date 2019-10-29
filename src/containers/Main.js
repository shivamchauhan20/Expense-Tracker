import React from 'react';
import { Input } from '../components/Input';
import {createExpense } from '../models/actioncreators/expenseactioncreator';
import { store } from '../models/store';
import Output from '../components/Output';
import  EditExpense from '../components/EditExpense';
import firebase from '../firebase';
import {Switch,Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
class Main extends React.Component{
  constructor(props){
    super(props);
    this.obj={};
    this.o={};
    this.updateExpense={};  
    this.ind=localStorage.id;
    this.state={obj:this.obj,checked:false,msg:'Unpaid',m:'',ind:this.ind};
  }
  componentWillMount(){
  this.props.history.push('/');
  console.log('Counter is ',this.state.ind);   
  }
  saveChanges(expenses,index){
    var promise = firebase.database().ref('/expenses/'+index).set(expenses);
    promise.then(data=>{
        alert('Record Updated in FireBase');
    }).catch(err=>{
        alert('Not Added Error occur');
        console.log(err);
    });
  }
  saveToServer(expenses,index){
    var promise = firebase.database().ref('/expenses/'+index).set(expenses);
    promise.then(data=>{
        alert('Record Added in FireBase');
    }).catch(err=>{
        alert('Not Added Error occur');
        console.log(err);
    });
    this.ind = parseInt(this.ind) + parseInt(1);
    localStorage.id=this.ind;
    console.log('Local Storage Id is ',localStorage.id);
    this.setState({...this.state,ind:this.ind,isAdded:true});
  
 }
 cloneExpense(object){
   var action = createExpense(object.name,object.desc,object.amount,object.msg,'add',object.ind);
   store.dispatch(action);
 }
  loadExpenses(){
    const expenseslist= firebase.database().ref('expenses');
    expenseslist.on('value',(snapshot)=>{
      let expenses = snapshot.val();
      console.log(expenses);
      for(let key in expenses){
       let expenseObject = expenses[key]; 
        this.cloneExpense(expenseObject);
      }
    }); 
  }
  add(){
    this.o={name:this.obj.name,desc:this.obj.desc,amount:this.obj.amount,msg:this.state.msg,ind:this.state.ind};
    if(this.obj.name!==(undefined&&"")&&this.obj.desc!==(undefined&&"")&&this.obj.amount!==(undefined&&"")){
    var action = createExpense(this.obj.name,this.obj.desc,this.obj.amount,this.state.msg,'add',this.state.ind);
    store.dispatch(action);
    this.saveToServer(this.o,this.state.ind);
    alert('Added Successfully');
    }
    else{
      alert('Cannot Add Empty Record');
    }
  }
  update(index){
  this.updateExpense={name:this.obj.name,desc:this.obj.desc,amount:this.obj.amount,msg:this.state.m,ind:index}
    var action = createExpense(this.obj.name,this.obj.desc,this.obj.amount,this.state.m,'add',index);
    store.dispatch(action);
    alert('Updated Successfully');
    this.saveChanges(this.updateExpense,index);
    this.props.history.push('/');
    // this.obj={};
    // this.setState({...this.state,view:this.view});
  }
  edit(data){
    var e = data;
    var action = createExpense(e.name,e.desc,e.amount,e.msg,'edit',e.ind);
    store.dispatch(action);
    this.props.history.push('/edit');
    this.obj = {name:e.name,desc:e.desc,amount:e.amount};
    this.setState({...this.state,obj:this.obj,m:e.msg});
    console.log('Obj is ',this.obj);
   // this.setState({...this.state,m:e.msg,view:this.view});
  }
  handleCheck(){
    this.checked=!this.state.checked;
    this.msg=this.checked?'Paid':'Unpaid';
    this.setState({...this.state,checked:this.checked,msg:this.msg});
  }
  handle(message){
   // console.log('Message is ',message);
    if(message==='Unpaid'){
      this.m = 'Paid';
      this.setState({...this.state,m:this.m});
    }
    else{
      this.m = 'Unpaid';
      this.setState({...this.state,m:this.m});
    }
  }
  takeInput(event){
      this.obj[event.target.id] = event.target.value;
  }
  render(){
   return(
   <div>
      <Switch>
         <Route exact path="/" render={()=><Input toggle={this.handleCheck.bind(this)} msg={this.state.msg} add={this.add.bind(this)} tap={this.takeInput.bind(this)}/>} />
        <Route  path="/list" render={()=><Output disable={this.state.d} edit={this.edit.bind(this)} load={this.loadExpenses.bind(this)}/>}  />
        <Route path="/edit" render={()=> <EditExpense obj={this.state.obj} m={this.state.m} msg={this.state.msg} handle={this.handle.bind(this)} tap={this.takeInput.bind(this)} update={this.update.bind(this)} />}/>
       </Switch> 
      </div>  
      )
      }
    }
export default withRouter(Main);
  //     switch(this.state.view)
  //   {
  //       case "list": return <Output edit={this.edit.bind(this)} viewChange={this.viewChange.bind(this)}/>
  //       case "edit": return <EditExpense m={this.state.m} msg={this.state.msg} handle={this.handle.bind(this)} tap={this.takeInput.bind(this)} update={this.update.bind(this)} viewChange={this.viewChange.bind(this)}/>
  //       default:  return <Input toggle={this.handleCheck.bind(this)} msg={this.state.msg} viewChange={this.viewChange.bind(this)} add={this.add.bind(this)} tap={this.takeInput.bind(this)}/>
                
  //  }
//  }
// }