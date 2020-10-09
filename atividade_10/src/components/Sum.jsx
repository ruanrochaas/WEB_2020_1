import React, { Component } from 'react';

export default class Sum extends Component {

    constructor(props){
        super(props);
        this.state = {sum:0};
        this.setSum = this.setSum.bind(this);
    }

    setSum(e) {
        this.setState({ sum: e.target.value })
    }

    render() {
        return (
            <div className="col-sm-2">
                <div className="card">
                    <h5 className="card-header">A soma é:</h5>
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{fontSize: 50}}>{this.state.sum}</h5>
                    </div>
                </div>
            </div>
        )
    }
}