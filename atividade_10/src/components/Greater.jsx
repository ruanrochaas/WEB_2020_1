import React, { Component } from 'react';

export default class Greater extends Component {

    constructor(props){
        super(props);
        this.state = {greater:0};
        this.setGreater = this.setGreater.bind(this);
    }

    setGreater(e) {
        this.setState({ greater: e.target.value })
    }

    render() {
        return (
            <div className="col-sm-2">
                <div className="card">
                    <h5 className="card-header">O maior é:</h5>
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{fontSize: 50}}>{this.state.greater}</h5>
                    </div>
                </div>
            </div>
        )
    }
}