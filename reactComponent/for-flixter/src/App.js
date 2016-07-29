import React, { Component } from 'react';
import FFBrowse from './FFBrowse/FFBrowse';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <FFBrowse />
        </div>
      </div>
    );
  }
}

export default App;
