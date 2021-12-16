import "./App.css";
import Navbar from "./components/Navbar";
import Textforms from "./components/Textforms";
import React from 'react'

export default function App() {
  return (
    <div>
      <Navbar title="TextUtils"/>
      <Textforms />
    </div>
  );
}