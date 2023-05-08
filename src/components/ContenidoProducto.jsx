import info from "./info.json"
import ramen from "../assets/img/ramen.jpg"

const ContenidoProducto = () => {
    const productos = info.productos

    return (
        <div className="contenido">
            <section className="tarjetas">  
                {
                    productos.map((producto)=>(
                        <section className="card">
                            <img src={ramen} alt="" className="toad"/>
                            <section className="textos">
                                <h1>{producto.nombre}</h1>
                                <h1>Precio: {producto.precio}</h1>
                                <h1>Stock: {producto.stock}</h1>
                            </section>
                        </section>
                    ))
                }
            </section>
            
        </div>
    );
};

export default ContenidoProducto;