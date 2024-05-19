// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {
  FaHome,
  FaFolder,
  FaFutbol,
  FaShoppingBasket,
  FaDollarSign,
  FaDoorOpen,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import Basket from "../../assets/basket.png";
function Header() {
  return (
    <div className="header">
      <Navbar expand="lg" className="navBar-black">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navBar__nav-black">
              <div className="basket">
                <img src={Basket} alt="logoBasket" />
              </div>
              <div className="navBar__nav-icon">
                <FaDoorOpen />
              </div>
              <div className="navBar__nav-icon">
                <FaSearch />
              </div>
              <div className="navBar__nav-icon">
                <FaShoppingCart />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="navBar-orange">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Navbar__Nav">
              <FaHome />
              <Nav.Link href="#home">Home</Nav.Link>
              <FaFolder />
              <NavDropdown title="Pages" id="basic-nav-dropdown"></NavDropdown>
              <FaFutbol />
              <NavDropdown
                title="Sportspress"
                id="basic-nav-dropdown"
              ></NavDropdown>
              <FaShoppingBasket />
              <NavDropdown title="Shop" id="basic-nav-dropdown"></NavDropdown>
              <FaDollarSign />
              <NavDropdown
                title="Purchase"
                id="basic-nav-dropdown"
              ></NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export { Header };
