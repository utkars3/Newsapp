
import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


const App =()=>{
  const pagesize=5;
  const apiKey=process.env.REACT_APP_NEWS_API

const [progress, setProgress] = useState(0)
  

  

  
    return (
      <Router>
      <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key="general" pageSize={pagesize} country="in" apiKey={apiKey} category="general"/>}/>
          <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={pagesize} country="in" apiKey={apiKey} category="business"/>}/>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pagesize} country="in" apiKey={apiKey} category="entertainment"/>}/>
          <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={pagesize} country="in" apiKey={apiKey} category="general"/>}/>
          <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pagesize} country="in" apiKey={apiKey} category="health"/>}/>
          <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pagesize} country="in" apiKey={apiKey} category="science"/>}/>
          <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pagesize} country="in" apiKey={apiKey} category="sports"/>}/>
          <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pagesize} country="in" apiKey={apiKey} category="technology"/>}/>
        
        </Routes>
      </div>
      </Router>
    )
  
}

export default App;
