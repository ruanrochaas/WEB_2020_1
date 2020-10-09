import React, { Component } from 'react';

export default class Multiplication extends Component {

    constructor(props){
        super(props);
        this.state = {multiplication:0};
        this.setMultiplication = this.setMultiplication.bind(this);
    }

    setMultiplication(e) {
        this.setState({ multiplication: e.target.value })
    }

    render() {
        return (
            <div className="col-sm-2">
                <div className="card">
                    <h5 className="card-header">A multiplicação é:</h5>
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{fontSize: 50}}>{this.state.multiplication}</h5>
                    </div>
                </div>
            </div>
        )
    }
}