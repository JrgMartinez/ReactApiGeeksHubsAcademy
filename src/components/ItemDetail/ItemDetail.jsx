import React from "react";
import { useLoaderData } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./ItemDetail.scss";

const ItemDetail = () => {
  const data = useLoaderData();

  return (
    <div
      className="itemDetail"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})`,
      }}
    >
      <Container>
        <Row>
          <Col sm={12} md={4} className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={data.title}
            ></img>
          </Col>
          <Col sm={12} md={8}>
            <div className="title">
              <h1>{data.title}</h1>
              <span className="tagline">{data.tagline}</span>
              <span>{data.release_date}</span>
              <span> &#9679; </span>
              <span>{data.genres?.map((genre) => genre.name).join(", ")}</span>
            </div>
            <div>
              Valoración: {data.vote_average} ({data.vote_count})
            </div>
            <div>
              <h2>Vista general</h2>
              <p>{data.overview}</p>
            </div>
            <div>
              <h2>Productoras</h2>
              <span>
                {data.production_companies
                  ?.map((company) => company.name)
                  .join(", ")}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemDetail;
