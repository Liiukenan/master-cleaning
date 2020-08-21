import React from 'react';
// import logo from './logo.svg';
import './reset.css';
import Home from "./Home"
// import axios from "axios";
// import qs from "qs";
// import url from "./serverAPI.config"

import About from './components/about'
// import { Route } from "react-router-dom"
import { Route } from "react-router-dom"
function App() {
  // let data={jid:'23431',pkg_name:'134',limit:100};
  // console.log(qs.s);
  // let a = axios.get(url.getInfo,{params:qs.stringify(data)});
  // let b = axios.post(url.getInfo,qs.stringify(data));
  // console.log(a);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}



       <Route path='/' exact component={Home}></Route>
       <Route path='/about' component={About}></Route>
    </div>
  );
}

export default App;
