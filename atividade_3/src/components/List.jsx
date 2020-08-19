import React, { Component } from 'react';
import axios from 'axios';

import TableRow from "./TableRow";

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = { disciplinas: [] };

        this.apagarElementoPorId = this.apagarElementoPorId.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/disciplinas')
        .then(
            (res) => {
                this.setState({ disciplinas: res.data })
            }
        )
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }
    
    montarTabela() {
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplinas, i) => {
                return <TableRow disciplinas={disciplinas} key={i} apagarElementoPorId={this.apagarElementoPorId} />;
            }
        )
    }

    apagarElementoPorId(id){
        let discipliasTemp = this.state.disciplinas;

        for(let i=0;i<discipliasTemp.length;i++){
            if(discipliasTemp[i].id===id){
                discipliasTemp.splice(i,1);
            }
        };

        this.setState({disciplinas:discipliasTemp});
    }
       

    render() {
        return (
            <div>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan="2" style={{textAlign:"center"}}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}