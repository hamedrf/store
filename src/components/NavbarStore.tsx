import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarStore = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img src="./images/icon.png" alt="macdonald" />
        </Navbar.Brand>
        <div className="d-lg-none">
          <Button variant="outline-danger" className="rounded rounded-5 me-2 ">
            Sign in
          </Button>
          <Button variant="danger" className="rounded rounded-5  ">
            Log in
          </Button>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M2.91669 20.4166C2.91669 19.6112 3.56961 18.9583 4.37502 18.9583H30.625C31.4304 18.9583 32.0834 19.6112 32.0834 20.4166C32.0834 21.2221 31.4304 21.875 30.625 21.875H4.37502C3.56961 21.875 2.91669 21.2221 2.91669 20.4166Z"
              fill="#504F4F"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.375 14.5833C4.375 9.75082 8.29251 5.83331 13.125 5.83331H21.875C26.7075 5.83331 30.625 9.75082 30.625 14.5833C30.625 15.3887 29.9721 16.0416 29.1667 16.0416H5.83333C5.02792 16.0416 4.375 15.3887 4.375 14.5833ZM13.125 11.6666C13.125 12.4721 12.4721 13.125 11.6667 13.125C10.8613 13.125 10.2083 12.4721 10.2083 11.6666C10.2083 10.8612 10.8613 10.2083 11.6667 10.2083C12.4721 10.2083 13.125 10.8612 13.125 11.6666ZM17.5 13.125C18.3054 13.125 18.9583 12.4721 18.9583 11.6666C18.9583 10.8612 18.3054 10.2083 17.5 10.2083C16.6946 10.2083 16.0417 10.8612 16.0417 11.6666C16.0417 12.4721 16.6946 13.125 17.5 13.125ZM24.7917 11.6666C24.7917 12.4721 24.1388 13.125 23.3333 13.125C22.5279 13.125 21.875 12.4721 21.875 11.6666C21.875 10.8612 22.5279 10.2083 23.3333 10.2083C24.1388 10.2083 24.7917 10.8612 24.7917 11.6666Z"
              fill="#504F4F"
            />
            <path
              d="M30.625 26.25C30.625 27.8608 29.3192 29.1666 27.7083 29.1666H7.29167C5.68083 29.1666 4.375 27.8608 4.375 26.25C4.375 25.4446 5.02792 24.7916 5.83333 24.7916H29.1667C29.9721 24.7916 30.625 25.4446 30.625 26.25Z"
              fill="#504F4F"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Homepage</Nav.Link>
            <Nav.Link href="#action2">Menu</Nav.Link>
            <Nav.Link href="#action3">Sale off</Nav.Link>
            <Nav.Link href="#action4">News</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>

          <Button
            variant="outline-danger"
            className="d-none d-lg-inline-block  rounded rounded-5 mx-2 btn-lg"
          >
            Sign in
          </Button>
          <Button
            variant="danger"
            className="d-none d-lg-inline-block  rounded rounded-5 mx-2 btn-lg"
          >
            Log in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarStore;
