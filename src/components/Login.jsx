import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='contenidoLogin'>
            <form action="" className='formulario'>
                <h1>Iniciar sesion</h1>
                <section className='contenidoForm'>
                    <input type="text" placeholder='Usuario'/>
                    <input type="password" placeholder='Contraseña'/>
                </section>
                <section className='el-a'>
                    <Link to={'/inicio'}>Iniciar</Link>
                </section>
                
            </form>
        </div>
    );
};

export default Login;