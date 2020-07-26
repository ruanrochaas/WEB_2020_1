import React, {Component} from 'react';

export default class Filho extends Component{
    render(){
        return (
            <div className="centralizador-q4">
                <div className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">Questão 4: Meu nome é <strong>{this.props.nome}</strong>.</h5>
                        <p className="card-text">Estou terminando o curso de <strong>{this.props.curso}</strong> e eu sou de <strong>{this.props.cidade}</strong>.</p>
                    </div>
                </div>
            </div>
        )
    }
}