import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header.js';
import MediaList from '../MediaList/MediaList.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instaResult: [],
      accountName: 'Erwan'
    };
  }


  render() {
    return (
      <div className="App">
        <Header accountName={this.state.accountName}/>
        <MediaList instaResult={this.state.instaResult}/>
      </div>
    );
  }
}

export default App;
