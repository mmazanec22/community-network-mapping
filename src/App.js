import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NetworkMapContainer from './NetworkMapContainer';
import About from './About';

class App extends Component {
  render() {
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
        <footer><a href="https://goo.gl/forms/mtnR70Hh5PfJTc1x2" target="_blank" rel="noopener noreferrer">contact</a></footer>
      </div>
    );
  }
}

export default App;
