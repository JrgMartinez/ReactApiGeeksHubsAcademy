import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import "./ItemList.scss";

const ItemList = ({ item, type }) => {
  return (
    <Col className="pt-4 pb-4">
      <Link to={`/${type}/${item.id}`}>
        <Card className="h-100">
          {item.poster_path && (
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
          )}
          <Card.Body>
            <Card.Title>{item.title || item.name}</Card.Title>
          </Card.Body>
          <Card.Text>{item.release_date || item.first_air_date}</Card.Text>
        </Card>
      </Link>
    </Col>
  );
};

export default ItemList;
