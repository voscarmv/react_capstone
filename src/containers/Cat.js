import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Cat = () => {
  const cat = useSelector(state => state.catState);
  if (cat.data[0]) {
    const catData = cat.data[0].breeds[0];
    const { description, cfa_url: cfaUrl, wikipedia_url: wikipediaUrl } = catData;
    return (
      <Container className="m-3">
        <Row>
          <Col>
            <div>{description}</div>
            <div><a href={cfaUrl}>CFA website</a></div>
            <div><a href={wikipediaUrl}>Wikipedia page</a></div>
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
