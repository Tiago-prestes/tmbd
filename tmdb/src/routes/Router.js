import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularMovies from "../pages/PopularMovies/PopularMovies";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import Header from "../components/Header/Header";


const Router = () => {
    
    return (
        <BrowserRouter>
        <Header/>
          <Routes>
              <Route path={"/"} element={<PopularMovies/>}/>
              <Route path={"/filme/:path"} element={<MovieDetails/>}/>
              <Route path={"/favorito"} element={<FavoritesPage/>}/>
          </Routes>
        </BrowserRouter>
    )
  }
  
  export default Router