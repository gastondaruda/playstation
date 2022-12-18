let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const container = document.querySelector("#container")
const shopContainer = document.querySelector("#shop-container")
const inputSearch = document.querySelector("#inputSearch")
const cartCantidad = document.querySelector("#cartCantidad")
const empty = "../imagenes/empty-cart.png"
const URLgames = "../products.json"
let contenidoHTML = ""

//---------------------------

const timeoutId = setTimeout(function(){
    console.log("Hola Mundo");
}, 2000)

const spinner = () => {setTimeout(function(){
    ;
}, 2000)}


const fetchGames = () => {
    container.innerHTML = `<span>cargando...</span>`
    fetch('../products.json')
    .then((response) => response.json())
    .then((data) => {
        let games = data;
        renderProductos(games)
    })
}

fetchGames()


//---------------------------


const noProd = () => {
    return `
            <div>
                <h3>No se encontraron productos</h3>
                <img src="../imagenes/joystick.png" alt="" />
            </div>`
}
const productCard = (param) => {
    const {id, nombre, price, img, plataforma, genero} = param
        return `
            <div>
                <div class="container__box ${plataforma}" category="${genero}">
                    <img class="videogames" src="${img}" alt="">
                    <h3 class="item-title"> ${capitalizarPrimeraLetra(nombre)}</h3>
                    <h3 class="item-price"> $${price}</h3>
                    <button value=${id} class="elemento btn btn-success" id=btn${id} onclick=comprar(${id})>
                        Comprar
                    </button>
                    <button class="btn btn-info" onclick="masInfo(${id})">Mas info</button>
                </div>
            </div>`
    }

const renderProductos = (array) => {
    container.innerHTML = array.map(prod => productCard(prod)).join("")
}
//window.addEventListener("DOMContentLoaded", () => renderProductos(productos));


const totalCantidad = () => {
    let total = carrito.reduce((acc, value) => acc + value.cant, 0)
    if(total == 0){
        cartCantidad.innerText = ""
    } else {
        cartCantidad.innerHTML = total
    }
}
const comprar = (id) => {
    let existe = carrito.find(prod => prod.id == id)
    if(existe){
        existe.cant ++
    }else{
        let findProd = productos.find(prod => prod.id == id)
        carrito.push(findProd)
    }
    console.log(carrito)
    totalCantidad()
    localStorage.setItem("carrito", JSON.stringify(carrito))
};

const filtroProd = (param) => {
    if(param != "Todos"){
        let productosFilter = productos.filter(prod => prod.genero == param || prod.consola == param) 
        if(productosFilter.length == 0){
            container.innerHTML = noProd()
        }else{
            renderProductos(productosFilter)
        }
    } else{
        renderProductos(productos)
    }
}
const searchProd = () => {
        let result = productos.filter(prod => prod.nombre.includes(inputSearch.value.toLowerCase()))
        renderProductos(result)
}
inputSearch.addEventListener("keyup" , searchProd)

totalCantidad()

/*
const eventosComprar = () =>{
    productos.forEach(item => {
        const btn = document.querySelector(`#btn${item.id}`)
        btn.addEventListener("click" , () => console.log(item))
    })
}
eventosComprar()
*/
/*
navbarGeneros.forEach(item => {
    const btn = document.querySelector(`#${item}`)
    btn.addEventListener("click" , () => filtroProd(btn.id))
})
*/

const masInfo = (id) => {
    let result = productos.find(prod => prod.id == id)
    localStorage.setItem("prodDetail", JSON.stringify(result))
    setTimeout( function() { window.location.href = "./detalle.html"; }, 10 );
}

