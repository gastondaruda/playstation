const navbarGeneros = [
    "Todos",
    "acción",
    "deporte",
    "autos",
    "survival"
]

const navbarConsolas = [
    "PlayStation4",
    "PlayStation3",
    "PlayStation2",
    "PlayStation1",
    "XboxOne",
    "Xbox360"
]

const navbarG = document.querySelector(".navbar-nav")
const navbarC = document.querySelector("#navbar-consolas")

const capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const renderNav = () => {
    navbarG.innerHTML = navbarGeneros
    .map(navItem => `
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" id=${navItem}>
                    ${capitalizarPrimeraLetra(navItem)}
                </a>
            </li>
    `).join("")
} 

renderNav()

const eventos = () => {
    navbarGeneros.forEach(item => {
        const btn = document.querySelector(`#${item}`)
        btn.addEventListener("click" , () => filtroProd(btn.id))
    })
}

eventos()


const renderConsolas = () => {
    navbarC.innerHTML = navbarConsolas
    .map(consola => `
            <li><a class="dropdown-item" id=${consola}>${consola}</a></li>
    `).join("")
}
renderConsolas()


function eventosConsolas(){
    navbarConsolas.forEach(item => {
        const btn = document.querySelector(`#${item}`)
        btn.addEventListener("click" , () => filtroProd(btn.id))
    })
}
eventosConsolas()