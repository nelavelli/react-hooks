import { createBrowserHistory } from "history";
import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import { StylesProvider } from "@mui/core/styles";
import { ThemeProvider } from "@emotion/react";
import { Router } from "next/router";

const App = (props) => {
  const activeRule = "/";
  const history = createBrowserHistory({ basename: activeRule });

  return (
    <StylesProvider>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <RouterRule />
        </Router>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
