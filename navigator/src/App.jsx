import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Componets/Home';
import Create from './Componets/Create';
import Delete from './Componets/Delete';
import Update from './Componets/Update';




 function App() {
    const [record,setRecord]  = useState([
    
     ])

  return (
    <div>

    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home record={record} />}></Route>
            <Route path='/create' element={<Create record={record} setRecord={setRecord}/>}></Route>
            <Route path='/delete' element={<Delete record={record} setRecord={setRecord}/>}></Route>
            <Route path='/update' element={<Update record={record} setRecord={setRecord}/>}></Route>
        </Routes>
        <Link id='b1' to={"/"}>Home</Link>
        <Link id='b1' to={"/create"}>Create</Link>
        <Link id='b1' to={"/update"}>Update</Link>
        <Link id='b1' to={"/delete"}>Delete</Link>
    </BrowserRouter>
     
    </div>
  )
}

export default App
