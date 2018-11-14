import React, { Component } from 'react';
import List from './components/List'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
