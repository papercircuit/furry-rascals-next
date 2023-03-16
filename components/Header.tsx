import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/"
          className="navbar-brand">
            <img
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Pet Store"
            />
            Pet Store
          
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
