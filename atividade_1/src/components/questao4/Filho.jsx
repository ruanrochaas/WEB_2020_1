import React, {Component} from 'react';

export default class Filho extends Component{
    render(){
        return (
            <div>
                <span>
                    Meu nome é <strong>{this.props.nome}</strong>, estou terminando o curso de <strong>{this.props.curso}</strong> e eu sou de <strong>{this.props.cidade}</strong>.
                </span>
            </div>
        )
    }
}