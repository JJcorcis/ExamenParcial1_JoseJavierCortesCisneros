import React from 'react';
import {useState} from 'react';
import './App.css';

export default function App() {
  const[name ,setName]=useState('');
  const[lastname ,setLastname]=useState('');
  const[alias ,setAlias]=useState('');
  
  const isDisabledApellido = lastname!== undefined && lastname !== "";

  const isDisabledApodo = alias!== undefined && alias !== "";

  const isDisabledName = name!== undefined && name !== "";

  
const isDisableGlobal = isDisabledName && isDisabledApellido && isDisabledApodo;

  const limpiar =()=>{

    setName('');
    setLastname('');
    setAlias('');
    setFormEnv(false);
  }
  const changeOfName=(event)=>{
    setName(event.target.value)
  }
  const changeOfLastname=(event)=>{
    setLastname(event.target.value)
  }
  const changeOfAlias=(event)=>{
    setAlias(event.target.value)
  }
  const enviar = (event) => {
    event.preventDefault();
    setFormEnv(true);
  }
  
  const [formularioEnv, setFormEnv] = useState(false);

  return (

      
    <div className ='App'>
      <p>Porfavor introduce tu nombre:</p>

      <input onChange={changeOfName} value={name}/>
   
      <p>Por favor introduce tu Apellido:</p>
      <input onChange={changeOfLastname} value={lastname}/>
      <p>Introduce el Alias con el que te indentifican:</p>
      <input onChange={changeOfAlias} value={alias}/>
      
      <br/>
      <br/>
      <br/>
      <button disabled = {!isDisableGlobal} onClick={enviar} >Enviar</button>
      <button onClick = {limpiar}>Limpiar</button>
      <br/>
      <br/>
      <br/>
      <p>Tus datos introducidos fueron: </p>
      {formularioEnv && (<p> {`${name}`} {`${lastname}`} {`${alias}`}</p>)}
    </div>


  );
  
}

