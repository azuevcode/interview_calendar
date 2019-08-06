import React from 'react';
import dateFns from 'date-fns';
import {
  Switcher,
  SwitchButton,
  LeftAngle,
  RightAngle,
} from './styles';

const SwitcherComponent = () => {
  const prevWeek = () => {};
  const nextWeek = () => {};

  // nextWeek = () => {
  //   this.setState({
  //     currentWeek: dateFns.addWeeks(this.state.currentWeek, 1)
  //   });
  // };

  // prevWeek = () => {
  //   this.setState({
  //     currentWeek: dateFns.subWeeks(this.state.currentWeek, 1)
  //   });
  // };

  return (
    <Switcher>
      <SwitchButton onClick={prevWeek}>
        <LeftAngle>&lsaquo;</LeftAngle>
      </SwitchButton>
      <div>{dateFns.format(new Date(), 'MMMM YYYY')}</div>
      <SwitchButton onClick={nextWeek}>
        <RightAngle>&rsaquo;</RightAngle>
      </SwitchButton>
    </Switcher>
  );
};

SwitcherComponent.displayName = 'Switcher';
export default SwitcherComponent;
