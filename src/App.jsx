import Header from "./components/header";
import Mysql from "./components/MySQL";
import Footer from "./components/footer";
import Home from "./components/home";
import React from "react";
import './components/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ComputerScience from "./components/ComputerScience";
import Mathematics from './components/Mathematics';
import MysqlInstall from "./components/Mysql_install";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="mainbody">

        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/computer_science">
              <ComputerScience />
            </Route>
            <Route exact path="/computer_science/mysql">
              <Mysql />
            </Route>
            <Route exact path="/computer_science/mysql/installation-of-mysql"><MysqlInstall/></Route>
            <Route exact path="/mathematics">
              <Mathematics/>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
