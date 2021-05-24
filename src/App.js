import  {Home} from "./containers/Home";
import { SignIn } from "./containers/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import { Container, Row, Col } from "reactstrap";

function App() {
  return ( 
    <div>
    <Header/>
  <Home/>

  </div>
  );
}

export default App;
