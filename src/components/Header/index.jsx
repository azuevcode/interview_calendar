import React from 'react';
import dateFns from 'date-fns';
import { connect } from 'react-redux';
import { addEvent } from 'modules/actions';
import {
  Header,
  Title,
  AddEventButton,
} from './styles';

const HeaderComponent = ({ addEvent }) => {
  const handleAddEvent = () => {
    let event = prompt('Enter event time: YYYY-MM-DD HH:mm');

    if (event) {
      if (/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/.test(event)) {
        event = dateFns.setMinutes(event, 0);
        addEvent(dateFns.getTime(event));
      } else {
        alert('Incorrect date format!');
      }
    }
  };

  return (
    <Header>
      <Title>Interview Calendar</Title>
      <AddEventButton onClick={handleAddEvent}>+</AddEventButton>
    </Header>
  );
};

const mapDispatchToProps = dispatch => ({
  addEvent: (event) => dispatch(addEvent(event)),
});

HeaderComponent.displayName = 'Header';
export default connect(null, mapDispatchToProps)(HeaderComponent);
