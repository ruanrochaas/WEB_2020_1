import React, { Component } from 'react';

export default class Number2 extends Component {

    constructor(props){
        super(props);
        this.state = {number2:''};
        this.setNumber2 = this.setNumber2.bind(this);
    }

    setNumber2(e) {
        this.setState({ number2: e.target.value })
    }

    render() {
        return (
            <div className="col-sm-2">
                <div className="card">
                    <h5 className="card-header">Número 2</h5>
                    <div className="card-body">
                        <p className="card-text">Escolha o número:</p>
                        <input type="number" className="form-control" value={this.state.number2} onChange={this.setNumber2}/>
                    </div>
                </div>
            </div>
        )
    }
}