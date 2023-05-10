import { Link } from "react-router-dom"


const Error = () => {
    return (
        <section className="not-found">
            <h2>404</h2>
            <span>PAGE NOT FOUND</span>
            <Link className="terminar" to={`/`}>Volver al inicio</Link>
                
        </section>
    )

}
export default Error