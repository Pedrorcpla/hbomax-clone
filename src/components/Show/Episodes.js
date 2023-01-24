import React from 'react'

import CardEpisode from './CardEpisode'

const Episodes = (props) => {
    return (
        <div className="episodes">
            <div className="title">{props.title}</div>
            <div className="row">
                <CardEpisode  name={props.data.name} img={props.data.still_path}/>
            </div>
        </div>
    )
}

export default Episodes