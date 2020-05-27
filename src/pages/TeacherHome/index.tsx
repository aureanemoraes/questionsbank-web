import React from 'react';

import TeacherLayout from '../../components/TeacherLayout';

import {Container} from './styles';

const TeacherHome: React.FC = () => {
  return (
    <TeacherLayout>
      <Container>
        <h1>TeacherHome</h1>
      </Container>
    </TeacherLayout>
    
  );
}

export default TeacherHome;