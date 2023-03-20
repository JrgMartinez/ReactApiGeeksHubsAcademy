import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./Search.scss";

const Search = (params) => {
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        navigate(
          (params.to || "/search/") +
            document.getElementById("search-input").value
        );
      }}
    >
      <InputGroup className="search">
        <Form.Control
          id="search-input"
          placeholder={params.placeholder || ""}
        />
        <Button type="submit" variant="outline-secondary">
          {params.text}
        </Button>
      </InputGroup>
    </Form>
  );
};

export default Search;
