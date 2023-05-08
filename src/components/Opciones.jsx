import { Link } from "react-router-dom";

const Opciones = ({opciones}) => {
    return (
        <div className="enlace">
            <Link to={'/inicio'} >{opciones}</Link>
            
        </div>
    );
};  

export default Opciones;