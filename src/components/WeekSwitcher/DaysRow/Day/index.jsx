import React from 'react';
import dateFns from 'date-fns';
import {
  Day,
  ShortDayName,
  DayNumber,
} from './styles';

const DayComponent = ({ currentDay }) => {
  return (
    <Day>
      <ShortDayName>{dateFns.format(currentDay, 'ddd')}</ShortDayName>
      <DayNumber>{dateFns.getDate(currentDay)}</DayNumber>
      {/* <div style={{ padding: '5px 0' }}>{dateFns.format(date, dateFormat)}</div>
          <div style={{ padding: '5px 0' }}>
            <span style={i === 6 ? { backgroundColor: 'red', borderRadius: '40px', color: '#fff', padding: '5px 10px' } : {}}>{date.getDate()}</span>
          </div> */}
    </Day>
  );
};

DayComponent.displayName = 'Day';
export default DayComponent;
