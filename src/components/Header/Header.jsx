import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Header.scss";

const Header = (props) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={logo}
                width="auto"
                height="35px"
                className="d-inline-block align-top"
              />
              {"  "}
              TheMovieDB App
            </Navbar.Brand>
          </NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink to="/movie">Películas</NavLink>
            <NavLink to="/tv">Series</NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
