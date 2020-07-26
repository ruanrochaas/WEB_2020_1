import React from 'react';

export default ( props ) =>
    <div>
        <span>
        Questão 3: Meu nome é <strong>{props.nome}</strong>, estou terminando o curso de <strong>{props.curso}</strong> e eu sou de <strong>{props.cidade}</strong>.
        </span>
    </div>