import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Cards = () => (
  <Card style={{ width: '18rem' }}>
    <Card.Img
      variant="top"
      src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22312%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20312%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16f12d70ec2%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16f12d70ec2%22%3E%3Crect%20width%3D%22312%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22115.7109375%22%20y%3D%2297.2046875%22%3E320x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
    />
    <Card.Body>
      <Card.Title>Quiz Topic</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card&apos;s content.
      </Card.Text>
      <Button variant="primary" href="#play">
        Play
      </Button>
    </Card.Body>
  </Card>
);

export default Cards;
