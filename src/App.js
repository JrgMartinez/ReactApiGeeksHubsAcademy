import axios from "axios";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Layout from "./components/Layout/Layout";
import List from "./components/List/List";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import SearchList from "./components/Search/SearchList";

const path = "https://api.themoviedb.org/3";
const key = "afb4a2109f365074cecd25f001de26ec";
const lang = "es-ES";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: async () => {
      console.log("LOAD GENRES");
      let movie_genres = axios.get(
        `${path}/genre/movie/list?api_key=${key}&language=${lang}`
      );
      let tv_genres = axios.get(
        `${path}/genre/tv/list?api_key=${key}&language=${lang}`
      );
      return await Promise.all([movie_genres, tv_genres])
        .then((res) => ({
          movie: res[0].data.genres,
          tv: res[1].data.genres,
        }))
        .catch((e) => console.error(e));
    },
    children: [
      {
        path: "/:type",
        element: <List />,
        loader: async ({ request, params }) => {
          let extraQuery = "";
          const url = new URL(request.url);
          let genre_ids = url.searchParams.get("ids");
          if (genre_ids) {
            extraQuery = `&with_genres=${genre_ids}`;
          }
          return axios
            .get(
              `${path}/${params.type}/popular?api_key=${key}&language=${lang}${extraQuery}`
            )
            .then((res) => res.data.results.slice(0, 10))
            .catch((e) => console.error(e));
        },
      },
      {
        path: "/:type/:id",
        element: <ItemDetail />,
        loader: async ({ params }) => {
          return axios
            .get(
              `${path}/${params.type}/${params.id}?api_key=${key}&language=${lang}`
            )
            .then((res) => res.data)
            .catch((e) => console.error(e));
        },
      },
      {
        path: "/search/:search",
        element: <SearchList />,
        loader: async ({ params }) => {
          let movie = axios.get(
            `${path}/search/movie?api_key=${key}&language=${lang}&query=${params.search}&page=1`
          );
          let tv = axios.get(
            `${path}/search/tv?api_key=${key}&language=${lang}&query=${params.search}&page=1`
          );
          return Promise.all([movie, tv])
            .then((res) => ({
              movie: res[0].data.results,
              tv: res[1].data.results,
            }))
            .catch((e) => console.error(e));
        },
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
