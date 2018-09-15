import React, { Component } from 'react';
import './App.css';
import NetworkMapContainer from './NetworkMapContainer'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <a id="skipNav" href="#mainContent">Skip to main content</a>
          <h1>Community Network Map</h1>
          <nav>
            <ul>
              <li>About</li>
            </ul>
            </nav>
        </header>
        <main id="mainContent">
          <NetworkMapContainer/>
        </main>
        <footer>contact</footer>
      </div>
    );
  }
}

export default App;
