import { Link } from 'react-router-dom';
import salir from '../assets/img/salir.png';

const SubImagen = () => {
    return (
        <div className='subimagen'>
            <Link to={'/'}><img src={salir} alt="" /></Link>
        </div>
    );
};

export default SubImagen;