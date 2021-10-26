function Productos({data,addToCart}) {

    const {id,name,precio}=data
    return (
        <div style={{border:"thin solid gray",padding:"1rem"}}>
            <h4>{name}</h4>
            <h5>Q{precio}.00</h5>
            <button onClick={()=> addToCart(id)}>Agregar</button>
            
        </div>
    )
}

export default Productos
