import React from "react";
import "../scss/sections/_header.scss";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Resume from "./Resume";
import Projects from "./Projects";
import { IoIosContact } from 'react-icons/io';





export default function Header() {
  return (
    <>
      <Router>
        <header>
          <div className="inner-header content-standard">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/contact">Contact <IoIosContact /></Link>
              </li>
            </ul>
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
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
