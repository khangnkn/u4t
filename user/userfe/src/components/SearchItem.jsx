import React from 'react';
import { Card, Button } from 'react-bootstrap';

const SearchItem = (tutor) => (
  <Card>
    <Card.Img variant="top" src={tutor.avartar} />
    <Card.Body>
      <Card.Title>{tutor.fullname}</Card.Title>
      <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);

export default SearchItem;
