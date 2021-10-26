function Carrito({data,delFromCart}) {

    const {id,name,precio,quantity}= data
    return (
        <div style={{ borderBottom: "thin solid gray" }}>
        <h4>{name}</h4>
        <h5>
          ${precio}.00 x {quantity} = ${precio * quantity}.00
        </h5>
        <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
        <br />
        <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
        <br />
        <br />
      </div>
    )
}

export default Carrito
