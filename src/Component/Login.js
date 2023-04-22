import React from 'react'
import './Login.css';
import Logo from '../assert/expense.1.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';



export default function Login() {


  const navigate = useNavigate();

  const [getForm,setForm] = useState({
    email:"",
    password:''
  });

  const onChangeHandeler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value});
     
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    if(!chekingEmptyValidation(getForm.email)){
      alert("Email Can't be Empty !");
      return;
    }
    if(!chekingEmptyValidation(getForm.password)){
      alert("password Can't be Empty !");
      return;
    }    

   axios.get(`http://localhost:3000/registration?email=${getForm.email}&password=${getForm.password}`).then((result)=>{
    if(result.data && result.data.length>0){
      sessionStorage.setItem('email',getForm.email);
      navigate('/Dashboard');
    }
    else{
    alert("Email Or Password Not Matched !");
    }
    
   }).catch((error)=>{
    console.log(error);
   });
   
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
        <div className="Wrapper">
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
    <div className="container-fluid">
      <div className="row row-expand-md">
         <div className="col-4"></div>
         <div className="col-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
          <form>
            <h2 className="heading">Login</h2>
              <div className="form-group">
                
                <label >Email address</label>
                <input type="email" className="form-control" name ="email" placeholder="Enter email" onChange={onChangeHandeler}/>
              
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" name="password" required  placeholder="Password" onChange={onChangeHandeler}/>
              </div>
              <div className="text-center">
                <button class="btn btn-primary submit-btn my-1" onClick={onSubmitHandler}>Login</button>
                <button class="btn btn-primary submit-btn my-1" onClick={()=>navigate("/SignUp")} Alt="Not Have An Account Just Create One !!">SignUp</button>
              </div>
             
            </form>
         </div>
         <div className="col-4"></div>
        </div>
        </div>
      </div><div className='footer'><p>&copy; Copy Right Recerved To Karthi 2023  &copy;</p></div>
      
      </div>
  )
}
