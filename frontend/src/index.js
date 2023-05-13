import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { CharactersProvider } from "./providers/characters";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { FiltersProvider } from "./providers/filters";

const root = ReactDOM.createRoot(document.getElementById("root"));
// reportWebVitals(console.log);
root.render(
  <React.StrictMode>
    <CharactersProvider>
      <FiltersProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </FiltersProvider>
    </CharactersProvider>
  </React.StrictMode>
);

reportWebVitals();
