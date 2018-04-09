import React from 'react';
import './MediaList.css';

import Media from '../Media/Media.js'

class MediaList extends React.Component {



  render () {
    return (
      <div className='list'>
        <Media />
      </div>

    );
  }
}

export default MediaList;
