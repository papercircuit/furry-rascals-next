import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/signup', {
        name,
        email,
      });
      setMessage(response.data.message);
      setName('');
      setEmail('');
      console.log('New sign up: ' + name + ' (' + email + ')');
    } catch (error) {
      console.error(error);
      setMessage('An error occurred while signing up.');
    }
  };

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
            <p>607 W 158th St.</p>
            <p> New York, NY 10032</p>
            <p>(646) 476-4058</p>
          </Col>
          <Col md={4}>
            <h3>Newsletter</h3>
            <p>Sign up for our newsletter to get the latest news and offers!</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group >
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="form-control"
                  required />
              </Form.Group>
              <Form.Group >
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="form-control"
                  required />
              </Form.Group>
              <p>{message}</p>
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
