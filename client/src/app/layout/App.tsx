import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from "../util/util";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { setBasket } from "../../features/basket/basketSlice";

function App() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if(buyerId){
      agent.Basket.get()
        .then(basket => dispatch(setBasket(basket)))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }else{
      setLoading(false);
    }
  }, [dispatch]);

  const [darkMode, setDarkMode] = useState(false);

  const palletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: palletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  const onSwitchClicked = () => {
    setDarkMode(!darkMode);
  }

  if(loading) return <LoadingComponent message="Initializing App" />

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
      <CssBaseline />
      <Header isClicked={darkMode} onSwitchClicked={onSwitchClicked} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default App;
