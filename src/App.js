import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './basic.styl';
import axios from "axios";
import qs from "qs";
import url from "./serverAPI.config"
function App() {
  // let data={jid:'23431',pkg_name:'134',limit:100};
  // console.log(qs.s);
  // let a = axios.get(url.getInfo,{params:qs.stringify(data)});
  // let b = axios.post(url.getInfo,qs.stringify(data));
  // console.log(a);
  console.log(process.env.NODE_ENV);
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


      
      <header />
    </div>
  );
}

export default App;
