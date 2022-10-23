import { Container, CssBaseline, Paper, ThemeProvider, } from "@material-ui/core"
import { createTheme } from '@material-ui/core/styles'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ChooseScreen from "./screens/ChooseScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderScreenMen from "./screens/OrderScreenMen";
import OrderScreenWomen from "./screens/OrderScreenWomen";

const theme = createTheme({
  typography: {
    h1: { fontWeight: 'bold' },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'white',
    }
  },
  palette: {
    primary: { main: '#ff1744' },
    secondary: {
      main: '#118e16',
      contrastText: '#ffffff',
    },
  },
});

function App(props) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Routes>
              <Route path="/" element={<HomeScreen history={props.history} />}></Route>
              <Route path="/choose" element={<ChooseScreen />}></Route>
              <Route path="/men" element={<OrderScreenMen />}></Route>
              <Route path="/Women" element={<OrderScreenWomen />}></Route>
            </Routes>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
