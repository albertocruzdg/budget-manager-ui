import React from 'react';
import NavbarItemList from './NavbarItemList';
import NavbarItem from './NavbarItem';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavbarItemList>
      <NavbarItem active={true} href="#">
        Assets
      </NavbarItem>
      <NavbarItem active={true} href="#">
        Expenses
      </NavbarItem>
      <NavbarItem active={true} href="#">
        Investment
      </NavbarItem>
    </NavbarItemList>
  </nav>
);

export default Navbar;
