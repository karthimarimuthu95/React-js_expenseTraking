
import React, { useEffect } from 'react'
import Header from './Header'
import { json, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios, { Axios } from 'axios';

export default function Dashboard() {

const [getForm,setForm] = useState({
  expname:"",
  exptype:"",
  catagory:"",
  expamount:"",
  paymentType:"",
  expDate:""      
});
const navigate = useNavigate();

const [getList,setList] = useState([]);
const [getId, setId] = useState(-1);
const [search, setSearch] = useState([])

const getListAPI=()=>{
  axios.get(`http://localhost:3000/book?email=${sessionStorage.getItem('email')}`).then((result)=>{
  console.log(result.data);
  setList(result.data);
  }).catch((error)=>{
    console.log(error);
  })
}

const onExistBindHandler = (index) => {
  setId(index);
  setForm({
    expname:getList[index].expname,
    exptype: getList[index].exptype,
    catagory:getList[index].catagory,
    expamount: getList[index].expamount,
    paymentType: getList[index].paymentType,
    expDate: getList[index].expDate
  })
}

const onEditSubmitHandler = () => {

  axios.put(`http://localhost:3000/book/${getList[getId].id}`,{...getForm,email:getList[getId].email}).then(()=>{
     getListAPI();
     if (getListAPI.length>0) {

      navigate('/Dashboard');
     }
  }).catch(()=>{

  })
}


const handleSearch = (e) => {
  setSearch(e.target.value);
  console.log(e.target.value);
 
  if (e.target.value) {
    let filteredArr = getList.filter((expname) =>
    expname.expname.toLowerCase().includes(e.target.value.toLowerCase()) 
    );
    setList(filteredArr);

  } else {
    getListAPI();
  }
}

useEffect(()=>{
  getListAPI();
},[])

const onChangeHandler = (e) => {
  setForm({ ...getForm, [e.target.name]: e.target.value })
}


const onSubmitHandler=(e)=>{
e.preventDefault();
console.log(getForm);
//  navigate('/Dashboard');
}

const onDeleteHandler = (index) => {

  axios.delete(`http://localhost:3000/book/${getList[index].id}`).then(()=>{
     getListAPI();
  }).catch(()=>{

  })


  // let deleteList = [...getListData];
  // deleteList.splice(index, 1);
  // setListData(deleteList)
  // sessionStorage.setItem('deletelist', JSON.stringify(deleteList));
}

  return (
     <div className="Wrapper">
        <Header/>
        <div>
            <h3 className="heading p-3" color='blue'>Dashboard</h3>
            <div className="row p-3">
                <label for="inputExpenseDate" className="col-sm-1 col-form-label fs-1">Search</label>
                <div className="col-xl-4">
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" onChange={handleSearch} aria-label="Search" />
                        {/* <button className="btn btn-primary" type="submit">Search</button> */}
                      </form>
                </div>
            </div>
            <div className="container-fluid">
                <table className="table bg-dark text-white">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Exp.Name</th>
                        <th scope="col">Exp.Category</th>
                        <th scope="col">Exp.Amount</th>
                        <th scope="col">Paid By</th>
                        <th scope="col">Exp.Date</th>
                        <th scope="col">Edit</th>
                        <th scope="col" >Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      getList.map((obj,index)=>{
                          return(<tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{obj.expname}</td>
                            <td>{obj.exptype}</td>
                            <td>{obj.expamount}</td>
                            <td>{obj.paymentType}</td>
                            <td>{obj.expDate}</td>
                      <td> <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => { onExistBindHandler(index) }}> 
                      Edit</button></td>
                            <td><button type="button" className="btn btn btn-danger" onClick={()=>{onDeleteHandler(index)}}>Delete</button></td>
                          </tr>)
                      })
                     }
                    </tbody>
                  </table>

            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Expense</h1>
                  <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
                </div>
                <div className="modal-body">
                <form>
                            
                            <div className="row mb-3">
                                <label htmlFor="inputExpenseTilte" className="col-sm-2 col-form-label">Name:</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="expname" value={getForm.expname} onChange={onChangeHandler}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputExpenseCategory" className="col-sm-2 col-form-label">Expense Category:</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" name="exptype" value={getForm.exptype} onChange={onChangeHandler} >
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
                                <label htmlFor="inputExpenseAmount" className="col-sm-2 col-form-label">Expense Amount:</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="expamount" value={getForm.expamount} onChange={onChangeHandler} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPaid" className="col-sm-2 col-form-label">Paid By:</label>
                                <div className="col-sm-10">
                                    <select className="form-select" aria-label="Default select example" name="paymentType" value={getForm.paymentType}onChange={onChangeHandler}  >
                                        <option selected>--Select--</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Card">Card</option>
                                        <option value="UPI">UPI</option>
                                        <option value="Account">Account Transfer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputExpenseDate" className="col-sm-2 col-form-label" >Expense Date:</label>
                                <div className="col-sm-10">
                                    <input type="date" className="form-control" name="expDate" value={getForm.expDate} onChange={onChangeHandler} />
                                </div>
                            </div>
                            
                        </form>
                </div>
                <div class="modal-footer">
                  {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                  <button type="button" class="btn btn-primary" onClick={onEditSubmitHandler}  data-dismiss="modal">Save changes</button>
                </div>
              </div>
            </div>
          </div>            
        </div>
    </div>
    </div>
  )
}
