import styles from './menu.module.scss';
import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

function Menu (props) {
   
    return (
        
     
           <Router>
    <div className={styles.Router}>
    <nav>
    <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/main">Main Page</Link>
            </li>
            <li>
              <Link to="/cards">Cards</Link>
            </li>
            <li>
              <Link to="/words">Words</Link>
            </li>
          </ul>
    </nav>
   
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/main" element={<Main/>}/>
          <Route exact path="/cards" element={<Cards/>}/>
          <Route exact path="/words" element={<Words/>}/>
          <Route path = "*" element={<NoMatch/>}/>
        </Routes>
        
        </div>
        </Router>
         
    );
}

function Home() {
    return <h2>Home</h2>
  }

  function Main() {
    return <h2>Main Page</h2>
  }

  function Cards() {
    return <h2>Cards</h2>
  }
  
  function Words() {
    return <h2>Words</h2>
  }
  
  function NoMatch() {
    return <h2>Error 404</h2>
  }
  
export default Menu;