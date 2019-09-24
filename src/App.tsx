import * as React from 'react';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <div className="App">
      </div>
    </React.Fragment>
  );
}

export default App;
