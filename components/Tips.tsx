import { Container, Row, Col } from 'react-bootstrap';

interface Tip {
    title: string;
    image: string;
    description: string;
}

const tips: Tip[] = [
    {
        title: 'How to Keep Your Dog Cool in the Summer',
        image: '/tip-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
    },
    {
        title: '10 Tips for a Happy Cat',
        image: '/tip-2.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
    },
    {
        title: 'Why Do Dogs Eat Grass?',
        image: '/tip-3.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
    },
    {
        title: 'How to Choose the Right Cat Litter',
        image: '/tip-4.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris bibendum magna et dui vehicula mollis.',
    },
];

export default function Tips() {
    return (
        <div className="tips-container">
            <Container>
                <h2>Tips & Blog</h2>
                <Row>
                    {tips.map((tip) => (
                        <Col md={3} key={tip.title}>
                            <div className="tip-card">
                                <img src={tip.image} alt={tip.title} />
                                <h4>{tip.title}</h4>
                                <p>{tip.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <style jsx>{`
    .tips-container {
    background-color: #f8f9fa;
    padding: 50px 0;
    }
        h2 {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 24px;
          text-align: center;
        }
    
        .tip-card {
          background-color: #fff;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        }
    
        img {
          display: block;
          margin: 0 auto;
          max-width: 100%;
          margin-bottom: 12px;
        }
    
        h4 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 12px;
        }
    
        p {
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 0;
        }
      `}</style>
        </div>
    );
}