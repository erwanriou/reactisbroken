import React from 'react';
import './MediaList.css';

import Media from '../Media/Media.js'

class MediaList extends React.Component {



  render () {
    return (
      <div className='list'>
        {
          this.props.medias.map(media => {
            return <Media media={media} key={media.id} />;
          })
        }
      </div>

    );
  }
}

export default MediaList;
