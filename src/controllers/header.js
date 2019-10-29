import React from 'react';
import {NavLink} from 'react-router-dom';
export const Header = ()=>{
    return (
        <div>
        <nav className="navbar navbar-dark bg-dark">    
        <div>
        <NavLink activeClassName="active" exact to="/">Home</NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink activeClassName="active" to="/list">List</NavLink>
        </div>
        </nav>
        </div>
    )
}