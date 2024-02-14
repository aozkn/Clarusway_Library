// Navbar Style
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import Flex from "../../styles/Flex";

export const Nav = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.navbarBgColor};
  padding: 1rem 2rem;
`;

export const Logo = styled(NavLink)`
  padding: 1rem 0;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.logoColor};
  transition: color 0.8s;
  :hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
`;
export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;
export const Menu = styled(Flex)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    width: 100%;
    transition: all 0.8s;
    max-height: ${({ showMenu }) => (showMenu ? "330px" : "0px")};
    overflow: hidden;
  }
`;
export const MenuLink = styled(NavLink)`
  text-align: center;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.linkColor};
  transition: all 0.3s ease-in;
  :hover {
    color: ${({ theme }) => theme.colors.linkHoverColor};
  }
  &.active {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.linkActiveColor};
  }
`;
