import { Container, Row, Col } from 'react-bootstrap';

export default function Brands() {
    return (
        <div className="brands-container">
            <Container>
                <h2>Brands We Love</h2>
                <Row>
                    <Col md={3} sm={6}>
                        <img src="https://www.thesprucepets.com/thmb/EhurYx5noFnxrNT92OSXQM2HFJE=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/purina-pro-plan-high-protein-puppy-food--e1322bd8d92e44dc8ac33b4110d08e14.jpg" alt="Brand 1" />
                    </Col>
                    <Col md={3} sm={6}>
                        <img src="https://www.thesprucepets.com/thmb/V7A3RDc4xWEo7fqGof6GT7hd1Ms=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/the-honest-kitchen-human-grade-dehydrated-whole-grain-dog-food-01d513f1836841749bf080650b3d58b6.jpg" alt="Brand 2" />
                    </Col>
                    <Col md={3} sm={6}>
                        <img src="https://www.thesprucepets.com/thmb/StAB5mNSq4PLgJB8euXBG6oiBKs=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/merrick-healthy-grains-dry-dog-food-small-breed-recipe-f3c07f1fb51543f79d3ddbe436b4ed03.jpg" alt="Brand 3" />
                    </Col>
                    <Col md={3} sm={6}>
                        <img src="https://www.thesprucepets.com/thmb/zWztitGshCPuLgziAsaLd9GyxnM=/fit-in/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bil-jac-frozen-dog-food-daaa4e487e9d43438016c1d0cf2ed3f3.jpg" alt="Brand 4" />
                    </Col>
                </Row>
            </Container>
            <style jsx>{`
                    .brands-container {
                    background-color: #fff;
                    padding: 50px 0;
                    }

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

