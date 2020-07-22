import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  typography: {
    body1: {
      fontFamily: "'Mulish', sans-serif",
      fontWeight: 500,
      fontSize: '1.0rem',
    }
  },
  palette: {
    primary: blue,
  },
})

export default theme