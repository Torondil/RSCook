import React from 'react';
import styles from './Features.scss';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Features = (): JSX.Element => (
  <div className="bg-secondary text-white py-4">
    <h2 className="text-center pb-4 pt-2">Application features</h2>
    <Container>
      <Row>
        <Col>
        <h3 className="text-warning">Feature title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
        <Col>
        <h3 className="text-warning">Feature title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
        <Col>
        <h3 className="text-warning">Feature title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3 className="text-warning">Feature title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
        <Col>
        <h3 className="text-warning">Feature title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
        <Col>
        <h3 className="text-warning">Feature title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, modi laboriosam. Consequatur, quos eum fuga consequuntur placeat at laboriosam voluptas.</p>
        </Col>
      </Row>
    </Container>
    <div className="d-flex justify-content-center my-3">
      <Link to="/search">
        <Button className="theme-button" variant="primary">Search recipes</Button>
      </Link>
    </div>
  </div>
)

export default Features;
