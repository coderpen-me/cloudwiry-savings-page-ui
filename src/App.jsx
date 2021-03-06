import React from 'react';
import { Container, Box } from '@material-ui/core';
import TopForm from './components/formComp.jsx';
import Stats from './components/Stats.jsx'
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme.jsx';
import './App.css';


/*

This component is used to render different sub modules of the UI

- TopForm (All input values on fist row)
- Stats (Graph View and other stats on right hand)

*/

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container className="new-page" maxWidth="lg">
        <Box>
          {"Savings Plan Parameters"}
        </Box>
        <br />
        <TopForm />
        <br />
        <Box className="new-comp">
          <Stats />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
