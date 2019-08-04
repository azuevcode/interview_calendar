import React from 'react';
import { Button } from 'components/ui';
import {
  Footer,
  TodayButton,
} from './styles';

const FooterComponent = ({ selectedEvent }) => {
  return (
    <Footer>
      <TodayButton>Today</TodayButton>
      {selectedEvent && <Button>Delete</Button>}
    </Footer>
  );
};

FooterComponent.displayName = 'Footer';
export default FooterComponent;
