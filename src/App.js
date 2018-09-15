import React, { Component } from 'react';
import './App.css';
import NetworkMapContainer from './NetworkMapContainer'

class App extends Component {
  render() {
    return (
      <div>
        <a href="#mainContent">Skip to main content</a>
        <header>
          <h1>Community Network Map</h1>
        </header>
        <nav>
          <ul>
            <li>About</li>
          </ul>
        </nav>
        <main id="mainContent">
          <NetworkMapContainer/>
        </main>
        <footer>Footer things</footer>
      </div>
    );
  }
}

export default App;
