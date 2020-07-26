import React from 'react';

export default ( props ) =>
    <div>
        <span>
            Meu nome é <strong>{props.nome}</strong>, estou terminando o curso de <strong>{props.curso}</strong> e eu sou de <strong>{props.cidade}</strong>.
        </span>
    </div>