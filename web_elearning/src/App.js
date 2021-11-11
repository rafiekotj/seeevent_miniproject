import Home from './Pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#eb4034"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
    
    
  );
}

export default App;
