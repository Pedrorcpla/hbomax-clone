import React, { useState, useEffect } from 'react';
import Api from '../../features/Api'

import Card from './Card'

const Category = (props) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const key = process.env.REACT_APP_API

        Api.get(`${props.category}?api_key=${key}${props.genre}`)
            .then(response => {
                setData(response.data.results)
            })
            .catch(error => console.log(error))
    },[props]);

    if(!data){
        return null
    }

    return (
        <div className="category">
            <div className="theme">
                {props.name}
            </div>
            <div className="row">
                {
                    data.map((item) => {
                        let type = props.type
                        if(item.media_type){
                            type = item.media_type
                        }

                        return <Card name={item.name} title={item.title} img={item.poster_path} id={item.id} type={type}/>
                    })
                }
            </div>
        </div>
    );
};

export default Category;