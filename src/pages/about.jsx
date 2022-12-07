import React, {useEffect} from 'react';
import {DashboardLayout} from '../components/Layout';
// import db from '../db';
import knex from 'knex';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup"
import ListGroup from 'react-bootstrap/ListGroup';





const AboutPage = (props) => {
  useEffect(() => {

  }, []);
  
  const Drinks = [
    {
      name: "Buffalo Trace",
      type: "Burboun",
      price: "29.99",
      size: "1.75L",
      inStock: true,
      description: "The Best"
    },
    {
      name: "Four Roses",
      type: "Burboun",
      price: "19.99",
      size: "750ml",
      inStock: false,
      description: "Yummy Yummy"
    }
   ];

  const getFromDB = async()=>{
    const pgk = knex({
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: '!Chevas1',
        database: 'PostgreSQL 15',
      },
    });

    const data = await pgk.select("*").from("Alcohol");
    console.log("data",data);

  }

  return (
    <Card style={{ width: '18rem' }}>
      <button onClick={async ()=>{getFromDB()}}>get from db</button>
      <Card.Img variant="top" src="/placeholder.jpeg" />
      <Card.Body>
        <Card.Title>{Drinks.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default AboutPage;
