import * as React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Frontpage from './components/Frontpage';

import Navbar from './components/Navbar';
import { Toolbar } from '@material-ui/core';

const App: React.FC = () => {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push('Super!');
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Route path='*' component={Navbar} />
      <Toolbar />
      <Route path='/' component={Frontpage} />
      {arr.map( (test) => <p>{test}</p> )}
    </React.Fragment>
  );
}

export default App;
