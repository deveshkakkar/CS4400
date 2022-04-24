import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { payEmployee, createCorp } from './components';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={App } />
      <Route path="/createcorp" element={createCorp } />
      <Route path="/payemployee" element={payEmployee} />
    </Routes>
  </Router>
  );

