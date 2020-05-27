import React, {useState, useCallback} from 'react';
import { Container, Content, Body } from './styles';
import NavBar from '../../components/NavBar';
import SideDrawer from '../../components/SideDrawer';


const Home: React.FC = ({children}) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const handleClickeSideDrawer = useCallback(() => {
    setSideDrawerOpen(!sideDrawerOpen);
  }, [sideDrawerOpen]);

  return (
    <Container>
      <NavBar openSideDrawer={handleClickeSideDrawer}/>

      <Body>
        {sideDrawerOpen && <SideDrawer action={sideDrawerOpen}/>}

        <Content>
          {children}
        </Content>
      </Body>
    </Container>
  );
}

export default Home;