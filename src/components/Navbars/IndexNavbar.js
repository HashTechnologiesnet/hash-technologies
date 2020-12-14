
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
import { motion, useViewportScroll } from "framer-motion"

import "./IndexNavbar.css";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";
import { Scroll } from "components/Framer/Scroll";



function IndexNavbar({active}) {

  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 299 ||
  //       document.body.scrollTop > 299
  //     ) {
  //       setNavbarColor("");
  //     } else if (
  //       document.documentElement.scrollTop < 300 ||
  //       document.body.scrollTop < 300
  //     ) {
  //       setNavbarColor("navbar-transparent");
  //     }
  //   };

  //   window.addEventListener("scroll", updateNavbarColor);

  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateNavbarColor);
  //   };
  // });
  return (
    <Navbar className={classnames("fixed-top")} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/home"
            target="_blank"
            title="Hash Technologies"
          >
           <img src={require("assets/img/logo.png")} style={{width:"140px"}} alt="Hash Technologies" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem className={(active==="home") ? "active" :""}>
              <NavLink
                data-placement="bottom"
                href="/home"
                title="Home"
              >
                <p>Home</p>
              </NavLink>
            </NavItem>
            <NavItem className={(active==="services") ? "active" : ""}>
              <NavLink
                data-placement="bottom"
                href="/projects"
                title="Home"
              >
                <p>Projects</p>
              </NavLink>
            </NavItem>
            <NavItem className={(active==="career") ? "active": ""}>
              <NavLink
                data-placement="bottom"
                href="/career"
                title="Home"
              >
                <p >Career</p>
              </NavLink>
            </NavItem>
            <NavItem className={(active==="contact") ? "active" : ""}>
              <NavLink
                data-placement="bottom"
                href="/contact"
                title="Home"
              >
                <p>Contact</p>
              </NavLink>
            </NavItem>
            <NavItem >
                <Scroll />
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
