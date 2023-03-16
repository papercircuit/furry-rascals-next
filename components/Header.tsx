import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import Link from 'next/link';
import Logo from '../assets/logo.png'

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/"
          className="navbar-brand">
            <Image
                src={Logo}
                 width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Pet Store"
            />
            Furry Rascals
          
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link href="/signin"
              className="nav-link">Sign In
            </Link>
            <Link href="/cart"
              className="nav-link">Cart
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
