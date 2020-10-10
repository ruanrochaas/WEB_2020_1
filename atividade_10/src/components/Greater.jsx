import React, { Component } from 'react';

import {connect} from 'react-redux';

class Greater extends Component {

    maiorNumero(){
        if (this.props.number1 > this.props.number2) {
            return this.props.number1;
        } else {
            return this.props.number2;
        }
    }

    render() {
        return (
            <div className="col-sm-2">
                <div className="card">
                    <h5 className="card-header">O maior é:</h5>
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{fontSize: 50}}>{this.maiorNumero()}</h5>
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

export default connect(mapStateToProps)(Greater);