import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Event from './Pages/Event/Event';
<<<<<<< HEAD
// import Account from './Pages/Account/Account';
=======
import Account from './Pages/Account/Account';
>>>>>>> e3c6cab8c6861ba2e71eb43c5c23d87885cb270e
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
      {/* <Event /> */}
<<<<<<< HEAD
      {/* <Account /> */}
=======
      <Account />
>>>>>>> e3c6cab8c6861ba2e71eb43c5c23d87885cb270e
      {/* <Signin /> */}
      {/* <Home /> */}
    </div>
    // <ThemeProvider theme={theme}>
    //   
    // </ThemeProvider>
    
    
  );
}

export default App;
