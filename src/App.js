import { Home } from "./containers/Home";
import { SignIn } from "./containers/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
