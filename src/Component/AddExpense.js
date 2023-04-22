import React from 'react'
import Header from './Header'
import './AddExpense.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

export default function AddExpense() {

    const navigate = useNavigate();
    const [getId, setId] = useState(-1)
    
    const [getForm,setForm] = useState({
        expname:"",
        exptype:"",
        expamount:"",
        paymentType:"",
        expDate:""      
    });


    const getListAPI=()=>{
        axios.post(`http://localhost:3000/book`,{...getForm, email:sessionStorage.getItem('email')}).then((result)=>{
        console.log(result.data);
        navigate('/Dashboard');
        }).catch((error)=>{
          console.log(error);
        })
      }
  
    const onChangeHandeler=(event)=>{
      setForm({...getForm,[event.target.name]:event.target.value});
    }
  
    const onSubmitHandler=(event)=>{
      event.preventDefault();
      console.log(getForm);
      getListAPI();
    
    }

  return (
    <div>
            <div className="Wrapper">
        <Header/>
        <div className="container-fluid">
            <div className="row row-expand-md">
                <div className="col-2"></div>
                <div className="col-8 col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
                    <form>
                        <h2 className="heading">Add Expense</h2>
                        <div className="row mb-3">
                            <label for="inputExpenseTilte" className="col-sm-2 col-form-label">Expense Name:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name='expname' onChange={onChangeHandeler}/>
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <label for="inputExpenseNotes" className="col-sm-2 col-form-label">Expense Notes:</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" name='exptype' onChange={onChangeHandeler}/>
                            </div>
                        </div> */}
                        <div className="row mb-3">
                            <label for="inputExpenseCategory" className="col-sm-2 col-form-label">Expense Category:</label>
                            <div className="col-sm-10"> 
                                <select className="form-select" aria-label="Default select example" name='exptype' onChange={onChangeHandeler}>
                                    <option selected>--Select--</option>
                                    <option value="Groceries">Groceries</option>
                                    <option value="Snacks">Snacks</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Toys">Toys</option>
                                    <option value="Movie">Movie</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputExpenseAmount" className="col-sm-2 col-form-label">Expense Amount:</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" name='expamount' onChange={onChangeHandeler}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputPaid" className="col-sm-2 col-form-label">Paid By:</label>
                            <div className="col-sm-10">
                                <select className="form-select" aria-label="Default select example" name='paymentType' onChange={onChangeHandeler}>
                                    <option selected>--Select--</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Card">Card</option>
                                    <option value="UPI">UPI</option>
                                    <option value="Account Transfer">Account Transfer</option>
                                    <option value="ATM">ATM</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="inputExpenseDate" className="col-sm-2 col-form-label">Expense Date:</label>
                            <div className="col-sm-10">
                                <input type="date" className="form-control" onChange={onChangeHandeler} name='expDate'/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary submit-btn my-4" onClick={onSubmitHandler}>Submit</button>
                          </div>
                    </form>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    </div>

    </div>
  )
}
