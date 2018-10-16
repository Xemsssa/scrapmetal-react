import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import OurServices from './OurServices';
import OurClients from './OurClients';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
        </div>
        <Banner/>

        <div className="container">
          <OurServices/>
          <OurClients/>
        </div>
      </div>
    );
  }
}

export default App;
