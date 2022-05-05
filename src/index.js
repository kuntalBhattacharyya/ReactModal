import React from 'react';
import ReactDOM from 'react-dom';
import Render from './Render';
import InputText  from './Functional';
import Application from './FormComponent';
import App from './App';
import ModalComponent from "./component/ModalComponent"
import EmployeeParent from "./Props/EmployeeParent"

ReactDOM.render(
  <React.StrictMode>
  <EmployeeParent></EmployeeParent>
  </React.StrictMode>,
  document.getElementById('root')
);

