import React from 'react';
import {FiMenu} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import {Container} from './styles';

interface NavBarProps {
  openSideDrawer(): void;
}

const NavBar: React.FC<NavBarProps> = ({openSideDrawer}) => {
  return (
    <Container>
      <button><FiMenu size={25} onClick={openSideDrawer}/></button>
      <Link to="a">Banco de Questões</Link>
    </Container>
  );
}

export default NavBar;