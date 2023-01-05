import * as React from "react";
import logo from "../logo.svg";
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
  return (
    <Navbar className="my-2" color="dark" dark>
      <NavbarBrand href="/">
        <img
          alt="logo"
          src={logo}
          style={{ height: 40, width: 40 }}
        />
        ZeroCopyTest
      </NavbarBrand>
    </Navbar>
  );
}
export default Header