import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import HomePage from './home/HomePage';
import '../css/main.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: blue,
  },
});

class Home extends React.Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('container'));
