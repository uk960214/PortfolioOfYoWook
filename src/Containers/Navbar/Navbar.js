import React from "react";
import { NavLink, NavContainer, NavWrapper, Title } from "./Navbar.elements";
import InfoSection from "../InfoSection/InfoSection";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <Title>Yo Wook's Portfolio</Title>

        <NavWrapper>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <InfoSection />
        </NavWrapper>
      </NavContainer>
    </>
  );
};

export default Navbar;
