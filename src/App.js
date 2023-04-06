import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';

class App extends Component {
  render() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/invoice" element={<InvoiceForm/>}/>
          <Route exact path="/" element={<InvoiceList/>}/>
          <Route path="invoice/:id" element={<InvoiceForm/>}/>
        </Routes>
      </BrowserRouter>
  );
}}

export default App;