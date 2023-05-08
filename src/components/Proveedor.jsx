import React from 'react';
import Menu from './Menu';
import ContenidoProveedor from './ContenidoProveedor';

const Proveedor = () => {
    return (
        <div className='inicio'>
            <Menu/>
            <ContenidoProveedor/>
        </div>
    );
};

export default Proveedor;