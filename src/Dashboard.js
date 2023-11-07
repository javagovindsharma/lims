import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
import { DashboardRoutesBody } from './app-routes';
import './style.css';

export class Dashboard extends Component {
  
  state = { }
  constructor() {
    super();
  }
  
  render() {
    return (
     <>
     <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  
<div class="container-fluid text-center">    
  <div class="row content">
    <div class="col-sm-2 sidenav">
    <li className="nav-item active">
                  <Link to="/dashboard/viewProducts">Home</Link>
                </li>
                |
                <li className="nav-item">
                  <Link to="/dashboard/cart">Cart</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/employee">Employee</Link>
                </li>
    </div>
    <div class="col-sm-8 text-left"> 
         <DashboardRoutesBody/>
    </div>
    <div class="col-sm-2 sidenav">
      <div class="well">
        <p>ADS</p>
      </div>
      <div class="well">
        <p>ADS</p>
      </div>
    </div>
  </div>
</div>

<footer class="container-fluid text-center">
  <p>Footer Text</p>
</footer>
     </>
    );
  }
}

