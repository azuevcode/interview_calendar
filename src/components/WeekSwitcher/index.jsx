import React from 'react';
import {
  WeekSwitcherContainer,
  Dummy,
  DateContainer,
} from './styles';
import DaysRow from './DaysRow';
import WeekSwitcher from './Switcher';

const WeekSwitcherComponent = () => {
  return (
    <WeekSwitcherContainer>
      <Dummy />
      <DateContainer>
        <DaysRow />
        <WeekSwitcher />
      </DateContainer>
    </WeekSwitcherContainer>
  );
};

WeekSwitcherComponent.displayName = 'WeekSwitcherContainer';
export default WeekSwitcherComponent;
