import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";
import { CircularProgress } from "@material-ui/core";

const lazyHome = React.lazy(() => import("./pages/home"));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route exact path="/" component={lazyHome} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
