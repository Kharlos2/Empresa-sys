import React from 'react';
import Menu from './Menu';
import ContenidoProducto from './ContenidoProducto';

const Producto = () => {
    return (
        <div className='inicio'>
            <Menu/>
            <ContenidoProducto/>
        </div>
    );
};

export default Producto;