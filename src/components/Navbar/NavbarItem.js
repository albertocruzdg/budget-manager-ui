import React from 'react';

const NavbarItem = props => (
  <li className={'navbar-item' + props.active === true ? 'active' : ''}>
    <a className="navbar-link mx-1" href={props.href}>
      {props.children}
    </a>
  </li>
);

export default NavbarItem;
