import React from 'react';
import { connect } from 'react-redux';
import dateFns from 'date-fns';
import { selectEvent } from 'modules/actions';
import {
  Row,
  TimeCell,
  Event,
} from './styles';
import Cell from './Cell';

const RowComponent = ({
  currentDate,
  events,
  selectedEvent,
}) => {
  const renderCells = () => {
    const cols = [];

    for (let i = 0; i < 8; i++) {
      if (i === 0) {
        const hours = dateFns.getHours(currentDate);
        cols.push(<TimeCell>{hours ? dateFns.format(currentDate, 'HH:mm') : ''}</TimeCell>)
      } else {
        debugger;
        const cellDate = dateFns.getTime(currentDate);
        const withEvent = events.includes(cellDate);

        cols.push(
          <Cell>
            {withEvent && <Event selected={selectedEvent === cellDate} onClick={() => selectEvent(cellDate)} />}
          </Cell>
        );
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

const mapStateToProps = state => ({
  events: state.events,
  selectedEvent: state.selectedEvent,
});

const mapDispatchToProps = dispatch => ({
  selectEvent: (event) => dispatch(selectEvent(event)),
})

RowComponent.displayName = 'Row';
export default connect(mapStateToProps, mapDispatchToProps)(RowComponent);
