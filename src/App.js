import "./App.css";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React, { useState } from 'react'
import Alert from "./components/Alert";

export default function App() {
  const [alert, setalert] = useState(null);
  const showAlert= (message,type)=>{
    setalert(
      {
        message : message,
        type : type
      }
      
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <div>
      <Navbar title="TextUtils"/>
      <Alert alert={alert}/>
      <Textforms showAlert={showAlert}/>
    </div>
  );
}