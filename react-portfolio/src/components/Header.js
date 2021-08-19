import "../scss/sections/_header.scss";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import { NavLink } from "react-router-dom";

import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Data from "./data/headerData";
import logo from "../images/bernhardt-trans.png";

const Header = () => {
  return (
    <>
      <Router>
        <header>
          <div className="inner-header content-standard">
            <div className="logo-header">
              <a href="/react-portfolio">
                <img src={logo} alt="didnt find" />
              </a>
            </div>
            {Data.map((data) => (
              <ul key={data.id}>
                <li>
                  <NavLink
                    activeClassName="navbar__link--active"
                    exact
                    to={data.adress}
                  >
                    {data.title}
                  </NavLink>
                </li>
              </ul>
            ))}
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <Redirect to="/react-portfolio/" />
          </Route>
          <Route exact path="/react-portfolio/">
            <Hero />
          </Route>
          <Route exact path="/react-portfolio/about">
            <About />
          </Route>
          <Route exact path="/react-portfolio/contact">
            <Contact />
          </Route>
          <Route exact path="/react-portfolio/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Header;
