import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./Genres.scss";

const Genres = (params) => {
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        let ids = Array.from(document.getElementsByClassName("selected")).map(
          (element) => element.value
        );
        navigate({
          pathname: `/${params.type}`,
          search: `?ids=${ids}`,
        });
      }}
    >
      <div className="genres pt-4">
        Géneros
        {params.genres.length > 0 && (
          <ul className="multi-select">
            {params.genres?.map((genre) => (
              <li
                key={genre.id}
                value={genre.id}
                onClick={(event) => {
                  event.currentTarget.classList.toggle("selected");
                }}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button type="submit" className="mt-4" variant="outline-primary">
        Filtrar
      </Button>
    </Form>
  );
};

export default Genres;
