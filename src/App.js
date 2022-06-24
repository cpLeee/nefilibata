import React from 'react'
import ReactDOM from 'react-dom';
import { Switch, Route } from "react-router-dom";
import './App.css';

import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import TasksPage from './components/TasksPage';
import MemoriesPage from './components/MemoriesPage';
import TaskCard from './components/TaskCard';



function App() {

  let currentPage;
  if (window.location.pathname=== "/tasks") {
    currentPage= <TasksPage />;
  } else if (window.location.pathname=== "/") {
    currentPage= <HomePage />;
  }else if (window.location.pathname=== "/memories") {
    currentPage= <MemoriesPage />;
  } else {
    currentPage= 
    <div>
      <h2 className="not-found">status: 404</h2>
      <h2 className="not-found-2">sorry this page does not exist ☹️ </h2>
    </div>; 
  }
  
  return (
    <div>
      {/* <NavBar /> */}
      {/* <HomePage /> */}
      {currentPage}
      
    </div>
  );
}



export default App