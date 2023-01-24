import React, { useEffect, useState } from 'react';

import Api from '../features/Api'
import CarouselShow from './Show/CarouselShow';
import Episodes from './Show/Episodes';
import Description from './Show/Description';
import Category from './Catalog/Category';

const Details = (props) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const key = process.env.REACT_APP_API

        Api.get(`${props.type}/${props.id}?api_key=${key}&append_to_response=external_ids`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error))
    },[props]);

    if(!data){
        return null
    }

    if(props.type === "tv"){
        return (
            <div className="content">
                <CarouselShow img={data.backdrop_path} name={data.name} title={data.title} tagline={data.tagline} />
                <div className="details">
                    <Description overview={data.overview}/>
                    <Episodes data={data.last_episode_to_air} title="Episodes"/>

                    <Category name="Séries recomendadas" category="discover/tv" type="tv" genre=""/>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="content">
                <CarouselShow img={data.backdrop_path} name={data.name} title={data.title} tagline={data.tagline} />
                <div className="details">
                    <Description overview={data.overview}/>

                    <Category name="Filmes recomendados" category="discover/movie" type="movie" genre="&with_genres=28"/>
                </div>
            </div>
        );
    }

    
};

export default Details;