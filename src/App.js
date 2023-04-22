import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Component/Login';
import SignUp from './Component/SignUp';
import Dashboard from './Component/Dashboard';
import AddExpense from './Component/AddExpense';
import About from './Component/About';
import Service from './Component/Service';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/> 
        <Route path='Login' element={<Login />}/> 
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="AddExpense" element={<AddExpense />}/>
        <Route path="SignUp" element={<SignUp />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
        <Route path="Login" element={<Login />} />    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
