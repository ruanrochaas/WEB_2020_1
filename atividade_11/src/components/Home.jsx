import React, { Component } from 'react';

import Card from './commons/Card';

export default class Home extends Component {
    render() {
        return (
            <Card title="Home">
                Bem vindo ao sistema de cadastro de disciplinas!
            </Card>
        )
    }
}