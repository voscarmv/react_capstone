import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cat = () => {
  const cat = useSelector(state => state.catState);
  if (cat.data[0]) {
    return (
      <Container className="m-3">
        <Row>
          <Col>
            <div>{cat.data[0].breeds[0].description}</div>
            <div><a href={cat.data[0].breeds[0].cfa_url}>CFA website</a></div>
            <div><a href={cat.data[0].breeds[0].wikipedia_url}>Wikipedia page</a></div>
          </Col>
          <Col>
            <div>
              <img className="w-75" alt={cat.data[0].breeds[0].alt_names} src={cat.data[0].url} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  return null;
};

export default Cat;
