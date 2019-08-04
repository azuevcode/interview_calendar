import React from 'react';
import {
  Header,
  Title,
  AddEventButton,
} from './styles';

const HeaderComponent = () => {
  return (
    <Header>
      <Title>Interview Calendar</Title>
      <AddEventButton>+</AddEventButton>
    </Header>
  );
};

HeaderComponent.displayName = 'Header';
export default HeaderComponent;
