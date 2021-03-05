import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Users from "./components/Users";
import Allusers from "./components/Allusers";
import AddUser from "./components/AddUser";
import { Col, Container, Row } from "reactstrap";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UpdateUser from "./components/UpdateUser";

function App() {
  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Route path="/" component={Home} exact/>
              <Route path="/user-createUser" component={AddUser} exact/>
              <Route path="/user-getAllUsers" component={Allusers} exact/>
              <Route path="/editUser/:id" component={UpdateUser} exact/>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
