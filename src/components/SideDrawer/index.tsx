import React, {useState, useCallback} from 'react';
import {FiChevronLeft, FiChevronDown} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import {Container, Item, SubItem} from './styles';

import {useAuth} from '../../hooks/AuthContext';

interface SideDrawerProps {
  action: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = ({action}) => {
  const [subItemOpenQ, setSubItemOpenQ] = useState(false);
  const [subItemOpenCQ, setSubItemOpenCQ] = useState(false);
  const {signOut} = useAuth();

  const handleSubItemOpenQ = useCallback(() => {
    setSubItemOpenQ(prevValue => !prevValue);
  }, []);

  const handleSubItemOpenCQ = useCallback(() => {
    setSubItemOpenCQ(prevValue => !prevValue);
  }, []);

  return (
    <Container action={action}>
      <Item>
        <li onClick={handleSubItemOpenQ}>
          <button>
            Questões 
            {subItemOpenQ ? <FiChevronDown size={14}/> : 
              <FiChevronLeft size={14}/>}
          </button>
        </li>
          {subItemOpenQ && <SubItem>
            <li><Link to="/teacher/home">Todas</Link></li>
            <li><Link to="/teacher/questions">Minhas</Link></li>
            <li><Link to="/teacher/question/new">Nova</Link></li>
          </SubItem>}
        <li onClick={handleSubItemOpenCQ}>
          <button>
            Cadernos de Questões - CQ
            {subItemOpenCQ ? <FiChevronDown size={14}/> : 
              <FiChevronLeft size={14}/>}
          </button>
        </li>
          {subItemOpenCQ && <SubItem>
            <li><Link to="/teacher/home">Todos</Link></li>
            <li><Link to="/teacher/questions">Meus</Link></li>
            <li><Link to="/teacher/questions/new">Novo</Link></li>
          </SubItem>}
      </Item>
      <button onClick={signOut}>Sair</button>
    </Container>
  );
}

export default SideDrawer;