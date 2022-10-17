import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import HomePage from './components/HomePage';
import TasksPage from './components/TasksPage';
import MemoriesPage from './components/MemoriesPage';



function App() {
return (
  <div>
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/memories">
        <MemoriesPage />
      </Route>
    </Switch>
    </BrowserRouter>
  </div>
)

  // let currentPage;
  // if (window.location.pathname=== "/tasks") {
  //   currentPage= <TasksPage />;
  // } else if (window.location.pathname=== "/") {
  //   currentPage= <HomePage />;
  // }else if (window.location.pathname=== "/memories") {
  //   currentPage= <MemoriesPage />;
  // } else {
  //   currentPage= 
  //   <div>
  //     <h2 className="not-found">status: 404</h2>
  //     <h2 className="not-found-2">sorry this page does not exist ☹️ </h2>
  //   </div>; 
  // }
  
  // return (
  //    <div>
  //     {currentPage}
      
  //   </div>
  // );
}



export default App