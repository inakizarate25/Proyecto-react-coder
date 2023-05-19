import './orden.css'

const Orden = ({children}) => {
    return (
        <div className='orden'>
           <h2>Orden realizada con exito</h2>
           {children}
        </div>
    )
}
export default Orden