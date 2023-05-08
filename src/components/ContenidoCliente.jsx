import info from "./info.json"
import toad from "../assets/img/toad.png"

const ContenidoCliente = () => {
   
    const clientes = info.clientes

    return (
        <div className="contenido">
            <section className="tarjetas">  
                {
                    clientes.map((cliente)=>(
                        <section className="card">
                            <img src={toad} alt="" className="toad"/>
                            <section className="textos">
                                <h1>{cliente.nombre}</h1>
                                <h1>Dirección: {cliente.direccion}</h1>
                                <h1>Telefono: {cliente.telefono}</h1>
                            </section>
                        </section>
                    ))
                }
            </section>
            
        </div>
    );
};

export default ContenidoCliente;