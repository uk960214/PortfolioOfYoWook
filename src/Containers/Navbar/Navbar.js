import React from "react";
import { NavLink, NavWrapper } from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <NavWrapper>
        <NavLink>About Me</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Tech Profile</NavLink>
        <NavLink>Contact</NavLink>
      </NavWrapper>
    </>
  );
};

export default Navbar;
