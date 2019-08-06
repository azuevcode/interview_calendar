import React from 'react';
import dateFns from 'date-fns';
import { Button } from 'components/ui';

import { Main } from './styles';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Grid from 'components/Grid';

class App extends React.Component {
  state = {
    currentWeek: new Date(),
    selectedDate: new Date(),
  };

  renderHeader = () => {
    const dateFormat = "MMMM YYYY";

    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 30px' }}>
        <Button style={{ width: '40px', fontSize: '2rem' }} onClick={this.prevWeek}>
          <span style={{ position: 'relative', top: '-3px', right: '1px' }}>&lsaquo;</span>
        </Button>
        <div>{dateFns.format(this.state.currentWeek, dateFormat)}</div>
        <Button style={{ width: '40px', fontSize: '2rem' }} onClick={this.nextWeek}>
          <span style={{ position: 'relative', top: '-3px', right: '-1px' }}>&rsaquo;</span>
        </Button>
      </div>
    );
  }

  renderDays = () => {
    const dateFormat = "ddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentWeek);

    for (let i = 0; i < 7; i++) {
      const date = dateFns.addDays(startDate, i);

      days.push(
        <div style={{ flex: 1, textAlign: 'center' }} key={i}>
          <div style={{ padding: '5px 0' }}>{dateFns.format(date, dateFormat)}</div>
          <div style={{ padding: '5px 0' }}>
            <span style={i === 6 ? { backgroundColor: 'red', borderRadius: '40px', color: '#fff', padding: '5px 10px' } : {}}>{date.getDate()}</span>
          </div>
        </div>
      );
    }

    return <div style={{ display: 'flex' }}>{days}</div>;
  }

  nextWeek = () => {
    this.setState({
      currentWeek: dateFns.addWeeks(this.state.currentWeek, 1)
    });
  };

  prevWeek = () => {
    this.setState({
      currentWeek: dateFns.subWeeks(this.state.currentWeek, 1)
    });
  };

  render () {
    return (
      <Main>
        <Header />
        <div style={{
          backgroundColor: '#e5e5e5',
          display: 'flex',
          padding: '10px 0',
          position: 'sticky',
          top: 0,
          zIndex: 1,
        }}>
          <div style={{ minWidth: '80px' }} />
          <div style={{ width: '100%' }}>
            {this.renderDays()}
            {this.renderHeader()}
          </div>
        </div>
        <Grid currentWeek={this.state.currentWeek}/>
        <Footer />
      </Main>
    );
  }
}

export default App;
