import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import Event from "./Pages/Event/Event";
import Account from "./Pages/Account/Account";
import Signin from "./Pages/Signin/Signin";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import HeaderCreate from "./Components/HeaderCreate/HeaderCreate";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeaderSearch from "./Components/HeaderSearch/HeaderSearch";
import DefaultLayout from "./Components/DefaultLayout/DefaultLayout";
import Review from "./Components/Review/Review";
import Search from "./Pages/Search/Search";
import Signupform from "./Components/SignupForm/SignupForm";
import store from "./Redux/Store";
import Homee from "./Pages/Home/Home_2";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eb4034",
      },
    },
  });
  return (
    <Provider store={store}>
      <div className="App">
      
        <BrowserRouter>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Homee} />
          {/* <Route path="/event" exact component={Event} /> */}
          <Route path="/event/:id" exact component={Review} />
          {/* <Route path="/review" component={Review} /> */}
          <Route path="/account" exact component={Account} />
          <Route path="/post" exact component={Search} />
            <DefaultLayout>
              
              <Route path="/login" exact component={Signin} />
              <Route path="/register" exact component={Signup} />
              
            </DefaultLayout>
            
          </Switch>
        </BrowserRouter>
        {/* <Signupform /> */}
        {/* <Signin /> */}
        {/* <Event /> */}
        {/* <Account /> */}
        {/* <Account /> */}
        {/* <Home /> */}
      </div>
    </Provider>

    // <ThemeProvider theme={theme}>
    //
    // </ThemeProvider>
  );
}

export default App;
