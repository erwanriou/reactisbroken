import React from 'react';
import './Header.css';


class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>{this.props.accountName} trying to import images</h1>
      </header>
    );
  }
}

export default Header;
