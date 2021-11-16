import Signup from './Pages/Signup/Signup'
import Home from './Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Event from './Pages/Event/Event';
// import Account from './Pages/Account/Account';
import Account from './Pages/Account/Account';
import Signin from './Pages/Signin/Signin';
import { BrowserRouter , Route, Routes, Switch } from 'react-router-dom';
import HeaderCreate from './Components/HeaderCreate/HeaderCreate';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HeaderSearch from './Components/HeaderSearch/HeaderSearch';
import DefaultLayout from './Components/DefaultLayout/DefaultLayout';
import Review from './Components/Review/Review';
import Search from './Pages/Search/Search';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eb4034"
      }
    }
  })
  return (
    // <Provider>
      <div className="App">
      
        <BrowserRouter>
          <DefaultLayout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Signin} />
                <Route path="/register" component={Signup} />
                <Route path="/event" component={Event} />
                <Route path="/review" component={Review} />
                <Route path="/account" component={Account} />
                <Route path="/search" component={Search} />
            </Switch>
          </DefaultLayout>
        </BrowserRouter>
      
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
