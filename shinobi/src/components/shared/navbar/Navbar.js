import React, { useState } from "react";
import { TabsContainer, NavbarContainer, NavbarContent } from "./Navbar.styles";
import logo from "./logo.jpg";
import Button from "../button/Button";

const Navbar = ({ children, ...otherProps }) => {

//  const { selectedPage, setPage } = useState("/");

//  const handleClick = page = e => {
//    setPage(page);
//  }
  return(
  <NavbarContainer {...otherProps}>
    <NavbarContent>
    <TabsContainer />
    <div>
    <img src={logo} alt="PGS Software"/>
    </div>
    <TabsContainer>
      <Button page={"/"} tab selected={true}>ABOUT US</Button>
      <Button page={"/skicams"} tab selected={false}>SKICAMS</Button>
      <Button page={"/contact"} tab selected={false}>CONTACT</Button>
    </TabsContainer>
    </NavbarContent>
  </NavbarContainer>
);
};

export default Navbar;
