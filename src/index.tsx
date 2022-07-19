import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppActualites from './pages/Actualites/AppActualite';
import AppContrats from './pages/Contrats/AppContrats';
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { tokenToString } from "typescript";
import { getuid } from "process";

const rootActualites = document.getElementById('mb_actualites') as HTMLElement;
if(rootActualites){
  rootActualites.id = `${rootActualites.accessKey}`;
  ReactDOM.render(    
    <React.StrictMode>
      <AppActualites/>
    </React.StrictMode>
  , rootActualites);
}

const rootContrats = document.getElementById('mb_contrats') as HTMLElement;
if(rootContrats){
  rootContrats.id = `${rootContrats.accessKey}`;
  ReactDOM.render(
    <React.StrictMode>
        <AppContrats uuid={uuidv4()}/>    
    </React.StrictMode>
  , rootContrats);
}

export default function toto(){
  return uuidv4();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
