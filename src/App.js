import  {Home} from "./containers/Home";
import { SignIn } from "./containers/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import {Footer} from "./components/Footer"
import {Container} from 'reactstrap';
function App() {
  return ( 
    <Container fluid>
    <Header/>
  <SignIn></SignIn>
  {/**<Home/>*/}
  <Footer></Footer>
  </Container>
  );
}

export default App;
