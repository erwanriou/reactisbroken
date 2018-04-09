import React from 'react';
import './Media.css';


class Media extends React.Component {
  constructor(props) {
    super(props);


  }

  render () {
    return (
      <div className='Media'>
        <div className='image'>
          <img src={require('../../images/image (1).jpg')} alt='1'/>
        </div>
      </div>

    );
  }
}

export default Media;
