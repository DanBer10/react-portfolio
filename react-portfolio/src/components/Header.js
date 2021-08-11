import "../scss/sections/_header.scss";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

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
      <Router basename="/react-portfolio">
        <header>
          <div className="inner-header content-standard">
            <div className="logo-header">
              <a href="/">
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
            <Hero />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Header;
