const detailContainer = document.querySelector("#detailContainer")
let prodDetail = JSON.parse(localStorage.getItem("prodDetail"));


const detailCard = (parametro) => {
    const {id, nombre, price, genero, consola, img, bgImg, description } = parametro
    return `
        <div class="Container" category="${genero}">
            <img class="backgroundImg" src=${bgImg} alt="">
            <div class="detailContainer">
                <img class="detailImg" src=${img} alt="">
                <div class="detailProd">
                    <h3 class="color-fff"> ${capitalizarPrimeraLetra(nombre)}</h3>
                    <span class="color-fff">${consola}</span>
                    <p class="color-fff">${description}</p>
                    <span class="color-fff"> $${price}</span>
                    <div>
                        <button class="btn btn-success" onclick="comprar(${id})">Comprar</button>
                        <button class="btn btn-primary" onclick="index()">Seguir comprando
                        </button>
                        <button class="btn btn-success" onclick="goCart()">Ir al carrito</button>
                    </div>
                </div>
        </div>
    `
}

const renderDetail = () => {
    detailContainer.innerHTML = detailCard(prodDetail)
}

renderDetail()


const index = () => {
    setTimeout( function() { window.location.href = "./index.html"; }, 10 );
}
const goCart = () => {
    setTimeout( function() { window.location.href = "./cart.html"; }, 10 );
}
totalCantidad()