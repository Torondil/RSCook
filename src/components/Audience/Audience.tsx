import React from 'react';
import styles from './Audience.scss';
import FirstLogo from '@/assets/images/004-cake.png';
import SecondLogo from '@/assets/images/015-cutlery.png';
import ThirdLogo from '@/assets/images/022-pizza.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Audience = (): JSX.Element => (
  <div className="bg-secondary text-white py-4">
    <h2 className="text-center mt-3">Target audience</h2>
    <Container>
      <Row>
        <img src={FirstLogo} className={styles['img-icon']} alt="FirstLogo"/>
        <Col>
        <h3 className="text-warning">Audience title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
      </Row>
      <Row>
        <img src={SecondLogo} className={styles['img-icon']} alt="SecondLogo"/>
        <Col>
        <h3 className="text-warning">Audience title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
      </Row>
      <Row>
        <img src={ThirdLogo} className={styles['img-icon']} alt="ThirdLogo"/>
        <Col>
        <h3 className="text-warning">Audience title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-center my-3">
      <Link to="/search">
        <Button variant="primary">Search inspiration</Button>
      </Link>
    </div>
  </div>
)

export default Audience;
