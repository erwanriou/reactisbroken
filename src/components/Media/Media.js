import React from 'react';
import './Media.css';


class Media extends React.Component {

  render () {
    return (
        <div className='image'>
          <img src={this.props.media.image} alt='1'/>
        </div>
    );
  }
}

export default Media;
