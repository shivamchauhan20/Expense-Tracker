import React from 'react';
import {connect} from 'react-redux';
import { Header } from '../controllers/header';
const Output = (props)=>{
return (
  <>
    <Header/>
      <hr />
  <h1 className='p'>List of Expenses</h1>
  {/* <button className="btn btn-success" onClick={props.save(props.result)}><i className="fa fa-upload" aria-hidden="true"></i>Save Records</button> */}
  <button className="btn btn-success"  onClick={props.load}><i className="fa fa-upload" aria-hidden="true"></i>Load Records</button>
<table className="table table-dark"> 
     <thead>
              <tr>
                <th scope="row">S.No</th>
                <th scope="row">Type</th>
                <th scope="row">Description</th>
                <th scope="row">Amount</th>
                <th scope="row">Status</th>
              </tr>
            </thead>
            <tbody>
              {props.result.map((singleExpense,index) => (
                <tr key={index} className={singleExpense.msg==='Paid'?'rowcolor2':'rowcolor1'}>
                  <td>{index+1}</td>
                  <td>{singleExpense.name}</td>
                  <td>{singleExpense.desc}</td>
                  <td>{singleExpense.amount}</td>
                  <td>{singleExpense.msg}</td>
                  <td> <button className="btn btn-outline-warning" value={'edit'}  onClick={()=>{props.edit(singleExpense)}}><i className="fa fa-pencil-square" aria-hidden="true"></i>Edit</button></td>
                </tr>
              ))}
            </tbody>       
    </table>
    {/* <button className="btn btn-secondary" value={'main'} onClick={props.viewChange}><i className="fa fa-home" aria-hidden="true"></i>Main Page</button> */}
   </>
    );
}
const mapStateToProps = (state)=>{
    return{
        result:state.expenses
        // name:state.name,
        // desc:state.desc,
        // amount:state.amount

    }
}
const fn = connect(mapStateToProps);
export default fn(Output);  