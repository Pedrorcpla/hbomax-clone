import React from "react";

import Carousel from "./Catalog/Carousel";
import Category from "./Catalog/Category";
import CategoryBox from "./Catalog/CategoryBox";

const Catalog = () => {
    return(
        <div className="content">
            <Carousel />
            <div className="catalog">
                <Category name="Tendências" category="trending/all/week" genre=""/>
                <Category name="Ação" category="discover/movie" type="movie" genre="&with_genres=28"/>
                <CategoryBox name="Séries" category="discover/tv" type="tv" genre=""/>
                <Category name="Drama" category="discover/movie" type="movie" genre="&with_genres=18"/>
                <CategoryBox name="Família" category="discover/movie" type="movie" genre="&with_genres=10751"/>
            </div>
        </div>
    )
}

export default Catalog;