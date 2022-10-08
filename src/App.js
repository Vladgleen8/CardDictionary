import React, { useState } from "react";
import InputForm from "./components/Input-form/InputForm";
import Card from "./components/Card/Card";
import './App.css';


function App() {
  const [cardInfo, setCardInfo] = useState([{
    rus: 'привет',
    eng: 'hello',
    theme: 'общение',
  }])
  
  return (
    <div className="container">
      <h1>English-Russian Card Dictionary</h1>
      <InputForm />
      <Card />
    </div>
  );
}

export default App;


/*

  1/ есть массив с обхектоами, куда из формы должен добавлять новый объект 

*/