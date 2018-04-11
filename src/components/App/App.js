import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header.js';
import MediaList from '../MediaList/MediaList.js';
import Insta from '../../util/insta.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediasResult: [],
      accountName: 'Erwan'
    };
  }


  componentDidMount() {
    Insta.display().then(medias => this.setState({mediasResult: medias}));
  }

  render() {
    return (
      <div className="App">
        <Header accountName={this.state.accountName}/>
        <MediaList medias={this.state.mediasResult}/>
      </div>
    );
  }
}

export default App;
