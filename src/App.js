import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component 
{
  render() {
    return (
      <div>
        <Router>
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<News  key="general" country="in" category="general"/>}> </Route>
        <Route path="/about" element={<News  key="about" country="in" category="about"/>}> </Route>
        <Route path="/business" element={<News  key="business" country="in" category="business"/>}> </Route>
        <Route path="/entertainment" element={<News  key="entertainment" country="in" category="entertainment"/>}> </Route>
        <Route path="/general" element={<News  key="general" country="in" category="general"/>}> </Route>
        <Route path="/health" element={<News  key="health" country="in" category="health"/>}> </Route>
        <Route path="/science" element={<News  key="science" country="in" category="science"/>}> </Route>
        <Route path="/sports" element={<News  key="sports" country="in" category="sports"/>}> </Route>
        <Route path="/technology" element={<News  key="technology" country="in" category="technology"/>}> </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}



export default App;
