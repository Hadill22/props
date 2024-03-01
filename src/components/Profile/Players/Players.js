
import React from 'react'
import { Button,Card } from "react-bootstrap" ;
const Players = ({player}) => {
    const{ name, jerseyNumber,Team,imgURL} = player;
  return (
    <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src={imgURL} style={{height:"300PX"}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
         <Card.Text>  {jerseyNumber}  </Card.Text>
        <Card.Text> {Team}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
};

export default Players
