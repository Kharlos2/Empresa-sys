import { Link} from 'react-router-dom';
import Imagen from './Imagen';
import SubImagen from './SubImagen';


const Menu = () => {
    
    return (
        <div className='menu'>
            <section className="seccion1">
                <Imagen/>
            </section>
            <section className='opciones'>
                <Link to={"/cliente"} className='enlace'>CLIENTE</Link>
                <Link to={"/producto"} className='enlace'>PRODUCTOS</Link>
                <Link to={"/proveedor"} className='enlace'>PROVEEDORES</Link>
            </section>
            <section className='imagen2'>
                <SubImagen/>
            </section>
        </div>
    );
};

export default Menu;