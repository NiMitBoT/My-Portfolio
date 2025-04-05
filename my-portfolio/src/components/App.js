import React from 'react';
import './styles.css';
import Nav from './Nav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;