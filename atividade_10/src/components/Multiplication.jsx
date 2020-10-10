import React, { Component } from 'react';

import {connect} from 'react-redux';

class Multiplication extends Component {

    render() {
        return (
            <div className="col-sm-2">
                <div className="card">
                    <h5 className="card-header">A multiplicação é:</h5>
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{fontSize: 50}}>{this.props.number1 * this.props.number2}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        number1: state.number1.valorNumber1,
        number2: state.number2.valorNumber2
    }
}

export default connect(mapStateToProps)(Multiplication);