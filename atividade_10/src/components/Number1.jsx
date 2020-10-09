import React, { Component } from 'react';

export default class Number1 extends Component {

    constructor(props){
        super(props);
        this.state = {number1:''};
        this.setNumber1 = this.setNumber1.bind(this);
    }

    setNumber1(e) {
        this.setState({ number1: e.target.value })
    }

    render() {
        return (
            <div className="col-sm-2">
                <div className="card">
                    <h5 className="card-header">Número 1</h5>
                    <div className="card-body">
                        <p className="card-text">Escolha o número:</p>
                        <input type="number" className="form-control" value={this.state.number1} onChange={this.setNumber1}/>
                    </div>
                </div>
            </div>
        )
    }
}