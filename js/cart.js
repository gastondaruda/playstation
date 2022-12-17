const shopTotal = document.querySelector("#shopTotal")
const btnD = document.querySelector(".btnDN")
const buttonInsert = document.querySelector("#buttonInsert")

const shopCard = (param) => {
    return `
        <div class="shoppingCartItem" id="${param.id}">
                <img src=${param.img} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title">${capitalizarPrimeraLetra(param.nombre)}</h6>
                <p class="item-price shoppingCartItemPrice">$${param.price}</p>
                <p> X ${param.cant}</p>
                <p class="item-price shoppingCartItemPrice">$${param.price * param.cant}</p>
                <i class="bi bi-trash3-fill" onclick="deleteItem(${param.id})"></i>
            </div>
        `
}
const renderCarrito = (array) => {
    shopContainer.innerHTML = array.map(prod => shopCard(prod)).join("")
}

const renderBtn = () => {
    return `
            <button 
                class="btn btn-success comprarButton btnDN" 
                type="button" 
                id="buy"
                onclick="finalizarCompra()">
                    Finalizar compra
            </button>
            <button 
            class="btn btn-danger btnDN"
            onclick="vaciarCarrito()">
                Vaciar Carrito
            </button>
        `
}
const cartEmpty = () => {
    return `
            <div>
                <img src="imagenes/empty-cart.png" alt="emptyCart" >
            </div>
    `
}

const totalCarrito = () => {
    let total = carrito.reduce((acc, value) => acc + value.price*value.cant, 0)
    if(total == 0){
        shopTotal.innerHTML = cartEmpty()
    } else{
        shopTotal.innerText = "El total es de : $" + total
    }
    
    let totalCant = carrito.reduce((acc, value) => acc + value.cant, 0)
    if(totalCant == 0){
        cartCantidad.innerHTML = ""
    }else{
        cartCantidad.innerHTML = totalCant
    }
}


const deleteItem = (id) => {
    carrito = carrito.filter(prod => prod.id != id)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    renderCarrito(carrito)
    
    
    if(carrito.length == 0){
        shopTotal.innerHTML = cartEmpty()
        cartCantidad.innerHTML = ""
        buttonInsert.innerHTML = ""
    }else{
        buttonInsert.innerHTML = renderBtn()
        renderCarrito(carrito)
    }
    totalCarrito()
}  



const validarCart = () => {
    if(carrito.length === 0){
        renderCarrito(carrito)
        shopTotal.innerHTML = cartEmpty()
        buttonInsert.innerHTML = ""
    } else {
        renderCarrito(carrito)
        totalCarrito()
        buttonInsert.innerHTML = renderBtn()
    }
}

validarCart()

/*
function eventosDelete(){
    carrito.forEach(item => {
        const btn  = document.querySelector(`btn${item.id}`)
        btn.addEventListener("click", () => console.log("Enlazado"))
    })
}

eventosDelete()
*/

const finalizarCompra = () => {
    alert("Gracias por su compra")
    carrito = []
    localStorage.setItem("carrito", JSON.stringify(carrito))
    validarCart()
    totalCarrito()
}

const vaciarCarrito = () => {
    alert("Vaciando carrito :(")
    carrito = []
    localStorage.setItem("carrito", JSON.stringify(carrito))
    validarCart()
    totalCarrito()
}