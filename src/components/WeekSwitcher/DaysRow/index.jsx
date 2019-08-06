import React from 'react';
import dateFns from 'date-fns';
import { DaysRow } from './styles';
import Day from './Day';

const DaysRowComponent = () => {
  const renderDays = () => {
    const days = [];
    const startWeek = dateFns.startOfWeek(new Date());

    for (let i = 0; i < 7; i++) {
      days.push(<Day currentDay={dateFns.addDays(startWeek, i)} />)
    }

    return days;
  }

  return (
    <DaysRow>
      {renderDays()}
    </DaysRow>
  );
};

DaysRowComponent.displayName = 'DaysRow';
export default DaysRowComponent;
