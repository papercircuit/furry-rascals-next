import { Container, Row, Col } from 'react-bootstrap';

export default function Hero() {
  return (
    <div className="hero-container">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Welcome to Furry Rascals</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui
              vehicula mollis.
            </p>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        .hero-container {
          background-image: url('https://images.unsplash.com/photo-1667864299172-7f5b748655ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80');
          background-size: cover;
          color: #fff;
          padding: 200px 0;
          text-align: center;
        }

        h1 {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 24px;
        }

        p {
          font-size: 24px;
        }
      `}</style>
    </div>
  );
}
