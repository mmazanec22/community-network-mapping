import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NetworkMapContainer from './NetworkMapContainer';
import About from './About';

class App extends Component {
  render() {
    // Using react router, make an about page
    // Make header link back home
    // Make about link link to about
    // Do a media query that tells the network map it's teeny
    // Make a better loading page
    // Make footer a link to a google form
    return (
      <div>
        <header>
          <a id="skipNav" href="#mainContent">Skip to main content</a>
          <Link to="/" id="logo">Asheville Community Network Map</Link>
          <nav>
            <ul>
              <Link to="/about"><li>About</li></Link>
            </ul>
            </nav>
        </header>
        <main id="mainContent">
          <Route exact path="/" component={NetworkMapContainer}/>
          <Route path="/about" component={About}/>
        </main>
        <footer>contact</footer>
      </div>
    );
  }
}

export default App;
