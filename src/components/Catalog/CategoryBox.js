import React, { useState, useEffect } from 'react';
import Api from '../../features/Api'

import Card from './Card'

const Category = (props) => {
    const [data, setData] = useState(null)

    function getMovie(){
        const key = process.env.REACT_APP_API

        Api.get(`${props.category}?api_key=${key}${props.genre}`)
            .then(response => {
                setData(response.data.results)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getMovie();
    },[]);

    if(!data){
        return null
    }

    return (
        <div className="category-box">
            <div className="theme">
                {props.name}
            </div>
            <div className="row">
                {
                    data.map((item) => <Card name={item.name} title={item.title} img={item.backdrop_path} id={item.id} type={props.type}/>)
                }
            </div>
        </div>
    );
};

export default Category;