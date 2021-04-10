import React from 'react';
import styled from 'styled-components';
import hexToRgba from 'src/app/core/utils/hextToRgba';
import { NavLink as Link } from 'react-router-dom';

interface Route {
  path: string;
  title: string;
  exact: boolean;
}

interface NavbarProps {
  routes: Route[];
}

const Nav = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &.active {
    background-color: ${(props) => hexToRgba(props.theme.colors.primaryVariant, 0.5)};
  }
  &:hover {
    background-color: ${(props) => hexToRgba(props.theme.colors.primaryVariant, 0.5)};
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }
`;

const mapRoute = (route: Route) => (
  <NavItem key={route.path}>
    <NavLink to={route.path} exact={route.exact}>
      {route.title}
    </NavLink>
  </NavItem>
);

const Navbar: React.FC<NavbarProps> = ({ routes }) => (
  <Nav>
    <Link to="/">Application</Link>
    <NavMenu>
      {
        routes.map(mapRoute)
      }
    </NavMenu>
  </Nav>
);

export default Navbar;
