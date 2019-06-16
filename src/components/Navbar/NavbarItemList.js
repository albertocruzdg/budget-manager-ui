import React from 'react';

const NavbarItemList = props => (
  <div className="navbar-collapse">
    <ul className="navbar-nav">{props.children}</ul>
  </div>
);

export default NavbarItemList;
