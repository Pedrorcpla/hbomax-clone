import React from 'react';

import Header from '../components/Header/Header'
import Details from '../components/Details'
import { useParams } from 'react-router-dom';

const Show = () => {
    let { type, id } = useParams();
    return (
        <>
            <Header />
            <Details id={id} type={type}/>
        </>
    );
};

export default Show;