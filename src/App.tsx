import * as React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import Frontpage from './components/Frontpage';

import Navbar from './components/Navbar';
import { Toolbar } from '@material-ui/core';

const App: React.FC = () =>
  <React.Fragment>
    <CssBaseline />
    <Route path='*' component={Navbar} />
    <Toolbar />
    <Route path='/' component={Frontpage} />
  </React.Fragment>

export default App;
