import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header.js';
import MediaList from '../MediaList/MediaList.js';
import Insta from '../../util/insta.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediasResult:
      [
        {id: "1750976073355759532_4535027220", image: "https://scontent.cdninstagram.com/vp/0890f2b0022a144ad370255ff9fc926c/5B61422A/t51.2885-15/s640x640/sh0.08/e35/29416202_129526697892932_7353483085951795200_n.jpg"},
        {id: "1741776187817295886_4535027220", image: "https://scontent.cdninstagram.com/vp/529cb3fc3035d3d671a82c361cb68bf5/5B58E95C/t51.2885-15/s640x640/sh0.08/e35/29400750_231054757471624_89149807234383872_n.jpg"},
        {id: "1719537335358752472_4535027220", image: "https://scontent.cdninstagram.com/vp/eb32e5f0589055632bf58a6c14062703/5B512E43/t51.2885-15/s640x640/sh0.08/e35/27891395_166368160820116_4453779192147869696_n.jpg"},
        {id: "1709631600927781364_4535027220", image: "https://scontent.cdninstagram.com/vp/fcde14b1c1835ae604261c7b5d5cc9d6/5B54543E/t51.2885-15/s640x640/sh0.08/e35/27576535_2037557533161330_7932184462563999744_n.jpg"},
        {id: "1683405456658502472_4535027220", image: "https://scontent.cdninstagram.com/vp/f0e14b914343c371c0729ef47ffd97d5/5B74A1AC/t51.2885-15/s640x640/sh0.08/e35/26156630_325523631282307_5213414625973895168_n.jpg"}
      ],
      accountName: 'Erwan'
    };

    this.displayInsta = this.displayInsta.bind(this);
  }


  displayInsta() {
    Insta.display().then(mediasResult => {
      this.setState({mediasResult: mediasResult});
    })
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
