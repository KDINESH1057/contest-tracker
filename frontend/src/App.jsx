import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContestList from './components/ContestList';
import ContestDetail from './components/ContestDetail';
import Leaderboard from './components/Leaderboard';
import LiveUpdates from './components/LiveUpdates';
import { ContestProvider } from './context/ContestContext';

const App = () => {
  return (
    <ContestProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={ContestList} />
          <Route path="/contest/:id" component={ContestDetail} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/live-updates" component={LiveUpdates} />
        </Switch>
      </Router>
    </ContestProvider>
  );
};

export default App;