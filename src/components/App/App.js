import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header.js';
import MediaList from '../MediaList/MediaList.js';
import Insta from '../../util/insta.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medias: [],
      accountName: 'Erwan'
    };

    this.displayInsta = this.displayInsta.bind(this);
  }


  displayInsta() {
    this.setState({medias: Insta.display()});
  }

  render() {
    return (
      <div className="App">
        <Header accountName={this.state.accountName}/>
        <MediaList medias={this.state.medias}/>
      </div>
    );
  }
}

export default App;
