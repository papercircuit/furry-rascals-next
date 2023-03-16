import { Container, Row, Col } from 'react-bootstrap';

export default function Brands() {
    return (
        <div className="brands-container">
            <Container>
                <h2>Brands We Love</h2>
                <Row>
                    <Col md={3}>
                        <img src="/brand-1.png" alt="Brand 1" />
                    </Col>
                    <Col md={3}>
                        <img src="/brand-2.png" alt="Brand 2" />
                    </Col>
                    <Col md={3}>
                        <img src="/brand-3.png" alt="Brand 3" />
                    </Col>
                    <Col md={3}>
                        <img src="/brand-4.png" alt="Brand 4" />
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
.brands-container {
background-color: #fff;
padding: 50px 0;
}

css
Copy code
    h2 {
      font-size: 36px;
      font-weight: bold;
      margin-bottom: 24px;
      text-align: center;
    }

    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }
  `}</style>
        </div>
    );
}

