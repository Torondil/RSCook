import React from 'react';
import styles from './Audience.scss';
import FirstLogo from '@/assets/svg/004-cake.svg';
import SecondLogo from '@/assets/svg/015-cutlery.svg';
import ThirdLogo from '@/assets/svg/022-pizza.svg';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Audience = (): JSX.Element => (
  <div className="bg-secondary text-white py-4">
    <h2 className="text-center mt-3">Target audience</h2>
    <Container>
      <Row>
        <FirstLogo />
        <Col>
        <h3 className="text-warning">Audience title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
      </Row>
      <Row>
        <SecondLogo />
        <Col>
        <h3 className="text-warning">Audience title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
      </Row>
      <Row>
        <ThirdLogo />
        <Col>
        <h3 className="text-warning">Audience title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-center my-3">
      <Button variant="primary">Search inspiration</Button>
    </div>
  </div>
)

export default Audience;
