import React from 'react';
import {connect} from 'react-redux';
export const EditExpense = (props)=>{
    // console.log('Result is ',props.result.ind);
    return(
        <div  className="container">   
            <h1 className="p">Edit Expenses</h1>
            <label>Type</label>
            <input  className="form-control" id='name' onChange={props.tap} type='text' defaultValue={props.obj.name}/>
            <label>Description</label>
            <input  className="form-control" id='desc' onChange={props.tap} type='text' defaultValue={props.obj.desc}/> 
            <label>Amount</label>
           <input  className="form-control" id='amount' onChange={props.tap} type='number' defaultValue={props.obj.amount}/>
            <label>Status:</label>
            &nbsp;
            <span>{props.m}</span> <input id='check' type='checkbox' onClick={()=>{
                props.handle(props.m);
            }} defaultChecked={props.result.msg==='Paid'?true:false}/>
            <br/>
            <button className="btn btn-primary" value='update' onClick={()=>{
                props.update(props.result.ind)}
            }><i className="fa fa-wrench" aria-hidden="true"></i>Update</button>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        result:state.editExpense
    }
}
const fn = connect(mapStateToProps);
export default fn(EditExpense);