
import info from "./info.json"
import camion from "../assets/img/camion.png"


const ContenidoProveedor = () => {
    const proveedores = info.proveedores

    return (
        <div className="contenido">
            <section className="tarjetas">  
                {
                    proveedores.map((proveedor)=>(
                        <section className="card">
                            <img src={camion} alt="" className="toad"/>
                            <section className="textos">
                                <h1>{proveedor.nombre}</h1>
                                <h1>NIT: {proveedor.NIT}</h1>
                                <h1>Dirección: {proveedor.direccion}</h1>
                            </section>
                        </section>
                    ))
                }
            </section>
            
        </div>
    );
};

export default ContenidoProveedor;