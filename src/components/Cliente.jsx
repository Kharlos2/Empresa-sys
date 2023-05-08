import React from 'react';
import Menu from './Menu';
import ContenidoCliente from './ContenidoCliente';

const cliente = () => {
    
    return (
        <div className='inicio'>
            <Menu/>
            <ContenidoCliente/>
        </div>
    );
};

export default cliente;