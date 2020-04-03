import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";
import { CircularProgress } from "@material-ui/core";
import Container from "./components/Container";
const lazyHome = React.lazy(() => import("./pages/home"));

function App() {
  return (
    <ThemeProvider>
      <Container>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="loader">
                <CircularProgress />
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={lazyHome} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
