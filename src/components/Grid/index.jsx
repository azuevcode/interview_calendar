import React from 'react';
import dateFns from 'date-fns';
import { Grid } from './styles';
import Row from './Row';

const GridСomponent = ({ currentWeek }) => {
  const renderRows = () => {
    const rows = [];
    const startWeek = dateFns.startOfWeek(currentWeek);

    for (let i = 0; i < 12; i++) {
      rows.push(
        <Row
          currentDate={dateFns.addHours(startWeek, i)}
          // onEventSelect={}
        />
      );
    }
    return rows;
  };

  return (
    <Grid>
      {renderRows()}
    </Grid>
  );
};

GridСomponent.displayName = 'Grid';
export default GridСomponent;
