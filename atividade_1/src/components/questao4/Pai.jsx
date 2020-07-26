import React, {Component} from 'react';

import Filho from "./Filho";

export default class Pai extends Component{
    render(){
        return (
            <Filho nome="Ruan Rocha" curso="Design Digital" cidade="Fortaleza"/>
        )
    }
}