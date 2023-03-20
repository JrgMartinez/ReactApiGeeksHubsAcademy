import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import List from "../List/List";
import "./Search.scss";

const SearchList = () => {
  return (
    <div className="search-list">
      <div className="search-list-title">
        <Container>Resultados de la búsqueda</Container>
      </div>
      <Tabs
        defaultActiveKey="movie"
        id="fill-tab-example"
        className="mb-3"
        transition={false}
        fill
        justify
      >
        <Tab eventKey="movie" title="Películas">
          <List type="movie" />
        </Tab>
        <Tab eventKey="tv" title="Series">
          <List type="tv" />
        </Tab>
      </Tabs>
    </div>
  );
  
};

export default SearchList;
