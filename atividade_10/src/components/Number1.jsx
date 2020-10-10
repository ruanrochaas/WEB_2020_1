import React, { Component } from 'react';

import {connect} from 'react-redux';
import {alterarNumero1} from '../store/actions/numberAction';

class Number1 extends Component {

    render() {
        return (
            <div className="col-sm-2">
                <div className="card">
                    <h5 className="card-header">Número 1</h5>
                    <div className="card-body">
                        <p className="card-text">Escolha o número:</p>
                        <input type="number" className="form-control" value={this.props.number1} onChange={evt => this.props.alterarNumeroInternamente(evt.target.value)}/>
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

function mapActionCreatorToProps(dispatch){
    return{
        alterarNumeroInternamente(novoNumero){
            const action = alterarNumero1(novoNumero);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapActionCreatorToProps)(Number1);