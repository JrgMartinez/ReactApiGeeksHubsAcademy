import React from "react";
import { useParams, useLoaderData, useOutletContext } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import Genres from "../Genres/Genres";

const List = (params) => {
  var items = useLoaderData();
  var { type } = useParams();
  var loadGenre = true;
  const genres = useOutletContext();

  if (Object.keys(params).length > 0) {
    loadGenre = false;
    if (params.type === "movie") {
      items = items.movie;
      type = "movie";
    } else {
      items = items.tv;
      type = "tv";
    }
  }

  return (
    <Container>
      <Row>
        {loadGenre && (
          <Col sm={12} md={2}>
            <Genres type={type} genres={genres[type]} />
          </Col>
        )}
        <Col sm={12} md={loadGenre ? 10 : 12}>
          <Row xs={1} sm={2} md={3} lg={5}>
            {items?.map((item) => (
              <ItemList key={item.id} type={type} item={item} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default List;
