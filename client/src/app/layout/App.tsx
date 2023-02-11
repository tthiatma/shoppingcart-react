import { DarkMode } from "@mui/icons-material";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header isClicked={darkMode} onSwitchClicked={onSwitchClicked} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
