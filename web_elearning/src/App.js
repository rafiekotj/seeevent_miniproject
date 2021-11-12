import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Event from './Pages/Event/Event';
import Signin from './Pages/Signin/Signin';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eb4034"
      }
    }
  })
  return (
    <div className="App">
      <Signin />
      {/* <Signup /> */}
      {/* <Event /> */}
      {/* <Home /> */}
    </div>
    // <ThemeProvider theme={theme}>
    //   
    // </ThemeProvider>
    
    
  );
}

export default App;
