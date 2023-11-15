import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/home">
        Home
      </a>
      <a className="menu-item" href="/about">
        About Us
      </a>
      <a className="menu-item" href="/team">
        Meet the Team
      </a>
      <a className="menu-item" href="/faq">
        FAQ
      </a>
    </Menu>
  );
};