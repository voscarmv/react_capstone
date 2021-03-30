import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import propTypes from 'prop-types';

const CatStats = props => {
  const {
    description,
    cfa_url: cfaUrl,
    wikipedia_url: wikipediaUrl,
    alt_names: altNames,
    url,
  } = props;
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
            <img className="w-75" alt={altNames} src={url} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

CatStats.propTypes = {
  description: propTypes.string.isRequired,
  cfa_url: propTypes.string,
  wikipedia_url: propTypes.string,
  alt_names: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

CatStats.defaultProps = {
  cfa_url: '#',
  wikipedia_url: '#',
};

export default CatStats;
