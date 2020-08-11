import React from 'react';

export default ( props ) => {
    return(
        <div className="card col-6 col-sm-2">
            <img src={props.img} className="card-img-top" alt="Joker staring at you." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    )
}