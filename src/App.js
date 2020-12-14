import React from 'react';
import './reset.styl';
import Home from "./Home"
import About from './components/about'
import PrivacyPolicy from './components/PrivacyPolicy'
import Eula from './components/Eula'
import { Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
       <Route path='/' exact component={Home}></Route>
       <Route path='/about' component={About}></Route>
       <Route path='/privacyPolicy' component={PrivacyPolicy}></Route>
       <Route path='/eula' component={Eula}></Route>
    </div>
  );
}
export default App;
