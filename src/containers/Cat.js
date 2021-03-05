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
  return (
    <div className="m-3">
      <h5>
        Welcome to The Cat-alog!
        <span aria-label="cat" role="img">🐈</span>
      </h5>
      <p>
        You can browse through our database of cat
        breeds by using the filter on the top-right
        corner of this page.
      </p>
      <p>
        Simply select a breed from the drop-down menu
        to display its details here.
        Or if you prefer, filter them first by clicking
        on the Filter button and setting the parameters
        you sre looking for!
      </p>
    </div>
  );
};

export default Cat;
