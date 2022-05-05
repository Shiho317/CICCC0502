import React from "react";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f50b5",
    },
    secondary: {
      main: "#f44336",
    },
    fading: {
      main: "#e8eaf6",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
