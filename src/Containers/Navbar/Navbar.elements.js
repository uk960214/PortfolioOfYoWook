import styled from "styled-components";

export const NavContainer = styled.div`
  text-align: center;
  padding: auto;
  padding-top: 2vh;
  padding-bottom: 2vh;
  position: sticky;
  top: 0;
  background-color: #ffffffaa;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

export const NavLink = styled.a`
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2rem;
  color: #5f5f5f;
  cursor: pointer;
  text-decoration: none;
`;

export const Title = styled.h1`
  font-family: "Maven Pro", sans-serif;
  letter-spacing: 0.2em;
  text-align: center;
  color: #5f5f5f;
  font-size: 2.5rem;
`;
