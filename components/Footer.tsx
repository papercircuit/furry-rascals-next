import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="footer-container">
      <Container>
        <Row>
          <Col md={4}>
            <h3>Site Map</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>
              <li>
                <a href="/promo">Promo</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Address</h3>
            <p>1234 Main St.</p>
            <p>Anytown, USA 12345</p>
            <p>(123) 456-7890</p>
          </Col>
          <Col md={4}>
            <h3>Newsletter</h3>
            <p>Sign up for our newsletter to get the latest news and offers!</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .footer-container {
          background-color: #f8f9fa;
          padding: 50px 0;
        }

        h3 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 24px;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 8px;
        }
      `}</style>
    </div>
  );
}
