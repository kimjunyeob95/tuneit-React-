import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, {useState } from "react";
import { Route, Switch } from "react-router-dom";

import Product from "./pages/Product";
import Solution from "./pages/Solution";
import About from "./pages/About";
import Main from "./pages/Main";
import Contact from "./pages/Contact";


const App = () => {
    const [apiUrl] = useState('https://dev.achakey.net');
    const [language,setLanguage] = useState('ko');
    const toggle = e => {
        setLanguage(e);
    }
    return (
      <>
        <Switch>
          <Route path="/" exact component={() => <Main apiUrl={apiUrl} toggle={e => toggle(e)} language={language}/>} />
          <Route path="/about" component={() => <About apiUrl={apiUrl} toggle={e => toggle(e)} language={language}/>} />
          <Route path="/product" component={() => <Product apiUrl={apiUrl} toggle={e => toggle(e)} language={language}/>} />
          <Route path="/solution" component={() => <Solution apiUrl={apiUrl} toggle={e => toggle(e)} language={language}/>} />
          <Route path="/contact" component={() => <Contact apiUrl={apiUrl} toggle={e => toggle(e)} language={language}/>} /> 
        </Switch>
      </>
    );
}

export default App;


