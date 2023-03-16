import { Container, Row, Col, Card, Button } from 'react-bootstrap';

interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    name: 'Dog Food',
    image: '/product-1.jpg',
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
  },
  {
    name: 'Cat Toy',
    image: '/product-2.jpg',
    price: 14.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
  },
  {
    name: 'Dog Collar',
    image: '/product-3.jpg',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
  },
  {
    name: 'Cat Food',
    image: '/product-4.jpg',
    price: 24.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
  },
];

export default function Shop() {
  return (
    <div className="shop-container">
      <Container>
        <h2>Shop</h2>
        <Row>
          {products.map((product) => (
            <Col md={3} key={product.name}>
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary">Add to Cart - ${product.price.toFixed(2)}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <style jsx>{`
        .shop-container {
          background-color: #fff;
          padding: 50px 0;
        }

        h2 {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 24px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}