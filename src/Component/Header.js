import React from 'react'
import Logo from '../assert/expense.1.png'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (

    <div>
      <nav class="navbar navbar-expand-xl bg-dark">

<div class="container">
    <img src= {Logo} />
    <Link class="navbar-brand text-white fs-3 fw-3" href="#">Expence Tracker</Link>
    <button type="button" data-toggle="collapse" data-target="#navbar-menu" class="navbar-toggler me-3 text-white">
        <i class="bi bi-list"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="navbar-nav ms-auto" >
            <li class="nav-item"><Link to ="/Dashboard" class="nav-link">Dashboard</Link></li>
            <li class="nav-item"><Link to="/AddExpense"class="nav-link">AddExpense</Link></li>
            <li class="nav-item"><Link to="/Service" class="nav-link">Service</Link></li>
            <li class="nav-item"><Link to="/About" class="nav-link">About</Link></li>           
            <li class="nav-item"><Link to="/Login" class="nav-link">Signout</Link></li>
        </ul>

    </div>

</div>

</nav>

    </div>
  )
}

export default Header
