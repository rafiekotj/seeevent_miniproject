import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Event from './Pages/Event/Event';
<<<<<<< HEAD
import Account from './Pages/Account/Account';
=======
>>>>>>> 1abb045f27c25b3ebc6fb95a88325a748a1b0f95
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
<<<<<<< HEAD
      <Account />
      {/* <Signin /> */}
=======
      {/* <Home /> */}
>>>>>>> 1abb045f27c25b3ebc6fb95a88325a748a1b0f95
    </div>
    // <ThemeProvider theme={theme}>
    //   
    // </ThemeProvider>
    
    
  );
}

export default App;
