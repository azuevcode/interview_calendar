import React from 'react';
import { Main } from './styles';
import Header from 'components/Header';
import Footer from 'components/Footer';
import WeekSwitcher from 'components/WeekSwitcher';
import Grid from 'components/Grid';

const App = () => {
  return (
    <Main>
      <Header />
      <WeekSwitcher />
      <Grid currentWeek={new Date()}/>
      <Footer />
    </Main>
  );
};

export default App;
