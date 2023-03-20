import React from "react";
import { Outlet, useParams, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = () => {
  const { type, search } = useParams();

  return (
    <div>
      <Header />
      <div className="content">
        {!type && !search && (
          <div className="home">
            <Search
              to="/search/"
              placeholder="Buscar una película o programa de televisión"
              text="Buscar"
            />
          </div>
        )}
        <Outlet context={useLoaderData()} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
