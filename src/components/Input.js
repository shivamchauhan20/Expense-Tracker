import React from 'react';
import { Header } from '../controllers/header';
export const Input = (props)=>{
    return(
        <div  className="container">
              <Header/>
              <hr />
            <h1  className="q">Expense</h1>
            <label >Type</label>
            <input className="form-control" id='name' onChange={props.tap} type='text' placeholder='Enter Type of Expense'/>
            <label>Description</label>
            <input className="form-control" id='desc' onChange={props.tap} type='text' placeholder='Enter Description of Expense'/>
            <label>Amount</label>
           <input className="form-control" id='amount' onChange={props.tap} type='number' placeholder='Enter Amount of Expense'/>
           <label>Status:</label>
            &nbsp;
            <span>{props.msg}</span><input id='check' type='checkbox' onClick={props.toggle} defaultChecked={props.msg==='Paid'?true:false}/>
            <br/>
            <button className="btn btn-success" onClick={props.add}><span className="fa fa-plus-square" aria-hidden="true"></span>Add</button>
        
        </div>
    )
}