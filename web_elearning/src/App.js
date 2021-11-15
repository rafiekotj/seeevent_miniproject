import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Event from './Pages/Event/Event';
// import Account from './Pages/Account/Account';
import Account from './Pages/Account/Account';
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
      {/* <Signin /> */}
      {/* <Signup /> */}
      <Event />
      {/* <Account /> */}
      {/* <Account /> */}
      {/* <Signin /> */}
      {/* <Home /> */}
    </div>
    // <ThemeProvider theme={theme}>
    //   
    // </ThemeProvider>
    
    
  );
}

export default App;
