import React from 'react';
import  Main  from './containers/Main';
import './App.css';
export class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Main/>
    )
  }
}