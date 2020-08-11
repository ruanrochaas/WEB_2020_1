import React from 'react';


export default (props) =>
    <div class="container mb-5">
        <h1>{props.arena}</h1>
        <div class="row d-flex justify-content-center">
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, {...props})
            })}
        </div>
    </div>