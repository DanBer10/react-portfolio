import React from "react";
import "../scss/sections/_header.scss";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Resume from "./Resume";
import Projects from "./Projects";
import Data from "./data/headerData";

export default function Header() {
  return (
    <>
      <Router>
        <header>
          <div className='inner-header content-small'>
            {Data.map((data) => (
              <ul key={data.id}>
                <li>
                  <Link to={data.adress} >{data.title}</Link>
                </li>
              </ul>
            ))}
          </div>
        </header>
        <Switch>
          <Route exact path='/'>
            <Hero />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/education'>
            <Education />
          </Route>
          <Route exact path='/resume'>
            <Resume />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
