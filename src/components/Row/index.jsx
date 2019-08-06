import React from 'react';
import dateFns from 'date-fns';
import {
  Row,
  TimeCell,
} from './styles';
import Cell from 'components/Cell';

const RowComponent = ({ currentDate }) => {
  const renderCells = () => {
    const cols = [];

    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        const hours = dateFns.getHours(currentDate);
        cols.push(<TimeCell>{hours ? dateFns.format(currentDate, 'HH:mm') : ''}</TimeCell>)
      } else {
        cols.push(<Cell />);
      }
    }
    return cols;
  };

  return (
    <Row>
      {renderCells()}
    </Row>
  );
};

RowComponent.displayName = 'Row';
export default RowComponent;
