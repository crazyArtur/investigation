import React from "react";
import { FooterContainer, Border } from "./Footer.styles";

const Footer = ({ children}) => (
  <FooterContainer>
    <Border />
    <p>Powered by PGS</p>

  </FooterContainer>
);

export default Footer;
