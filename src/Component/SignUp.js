import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '../assert/expense.1.png';
import { useState } from 'react';
import axios from 'axios'



export default function SignUp() {


  const navigate=useNavigate();
  const [getForm,setForm] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:''
  });

  const onChangeHandeler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value});
     
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    if(!chekingEmptyValidation(getForm.firstName)){
      alert("firstName Can't be Empty !");
      return;
    }
    if(!chekingEmptyValidation(getForm.email)){
      alert("Email Can't be Empty !");
      return;
    }
    if(!chekingEmptyValidation(getForm.password)){
      alert("password Can't be Empty !");
      return;
    }else{
      axios.post('http://localhost:3000/registration',getForm).then((result)=>{
        
        console.log(result.data);
        navigate('/login')
        
      }).catch(()=>{

      });
      
    // localStorage.setItem("email",getForm.email);
    // localStorage.setItem("password",getForm.password);
  }
  }

  const chekingEmptyValidation=(value)=>{
    if(value){
      return true;
    }
    else{
      return false;
    }
  }
  return (
    <div>
        <nav className="navbar navbar-expand-xl bg-dark">

<div className="container">

    <img src= {Logo} alt="Logo"/>
    <a className="navbar-brand text-white fs-3 fw-3" to ="Dashboard">Welcome To Expense Tracker </a>
    <button type="button" data-toggle="collapse" data-target="#navbar-menu" className="navbar-toggler me-3 text-white">
        <i className="bi bi-list"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbar-menu">
        <ul className="navbar-nav ms-auto" >
           
        </ul>

    </div>

</div>

</nav>
    <div className="Wrapper">
    <div className="container-fluid">
      <div className="row row-expand-md">
         <div className="col-2"></div>
         <div className="col-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
          <form>
            <h2 className="heading">SignUp</h2>
            <div className="form-group ">
                
              <label  required="true" >FirstName</label>
              <input type="text" className="form-control"  required="true" name="firstName" pattern="[a-zA-Z]{1,}"  placeholder="Enter FirstName"  onChange={onChangeHandeler}/>
            
            </div>
            <div className="form-group">
                
              <label >LastName</label>
              <input type="text" className="form-control" name="lastName" pattern="[a-zA-Z]{1,}" required placeholder="Enter LastName" onChange={onChangeHandeler}/>
            
            </div>
              <div className="form-group">
                
                <label >Email address</label>
                <input type="email" className="form-control" name= "email"  placeholder="Enter email" onChange={onChangeHandeler}/>
              
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name ="password" required maxlength="10" minlength="5" placeholder="Password" onChange={onChangeHandeler}/>
              </div>
              <div className="text-center">
                <button type="submit"   className="btn btn-primary submit-btn my-1" onClick={onSubmitHandler}>Signup</button>
                <button class="btn btn-primary submit-btn my-1" onClick={()=>navigate('/Login')} Alt="AlReady have Account SignIn here !!">Login</button>
              </div>
            </form>
         </div>
         <div className="col-2"></div>
        </div>
        </div>
      </div>
      <div classNameName='footer'><p>&copy; Copy Right Recerved To Karthi 2023  &copy;</p></div>
    </div>
  )
}
