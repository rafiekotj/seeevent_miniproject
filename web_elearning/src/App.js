import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Event from './Pages/Event/Event';
// import Account from './Pages/Account/Account';
import Account from './Pages/Account/Account';
import Signin from './Pages/Signin/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eb4034"
      }
    }
  })
  return (
    // <Provider store={[]}>
      <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact component={Signin} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={Signup} />
          <Route path="/event" component={Event} />
          <Route path="/account" component={Account} />
        </Routes>
      </Router>
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Event /> */}
      {/* <Account /> */}
      {/* <Account /> */}
      {/* <Signin /> */}
      {/* <Home /> */}
    </div>
    // </Provider>
    
    // <ThemeProvider theme={theme}>
    //   
    // </ThemeProvider>
    
    
  );
}

export default App;
