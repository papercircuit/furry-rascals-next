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
    image: 'https://images.unsplash.com/photo-1601758228006-964e41e5e8eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80',
    price: 29.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
  },
  {
    name: 'Cat Toy',
    image: 'https://images.unsplash.com/photo-1625142918110-5f9fe7a56027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80',
    price: 14.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
  },
  {
    name: 'Dog Collar',
    image: 'https://images.unsplash.com/photo-1556229174-5e42a09e45af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1298&q=80',
    price: 19.99,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
  },
  {
    name: 'Cat Food',
    image: 'https://images.unsplash.com/photo-1604544203292-0daa7f847478?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
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