import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import TasksPage from './TasksPage'
import MemoriesPage from './MemoriesPage'
import NavBar from './NavBar'



function MainPage() {

  return (
    <div>
        
       <NavBar />

          <div className='mainpage'>

              <h1 className='mainpage-title'>Nefelibata</h1>
              <h2 className='mainpage-title-definition'>
                  (n) “Cloud Walker”; One who lives in the clouds of their own imagination or dreams.
              </h2>
        
     
       
             <button className='mainpage-task-button'>
              Let's Get This Week Started ❤️ </button>
        
         
             <button className='mainpage-memory-button'>
              My Memory Bank ☁️ </button>
          </div>
      </div>
  )
}

export default MainPage