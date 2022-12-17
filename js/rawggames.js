const container = document.querySelector("#games")
const trailer = document.querySelector("#trailer")
const freeGamesContainer = document.querySelector("#freeGames")


const renderNotice = (param) => {
    return `
        <div class="card">
            <img src=${param.image} class="card-img-top" alt=${param.title}>
            <div class="card-body">
                <h5 class="card-title">${param.title}</h5>
                <p>${param.description}</p>
            </div>
            <a href=${param.link} class="btn btn-primary" target="_blank">Ver link</a>
        </div>
        </div>
        `
}

const render = (array) => {
    container.innerHTML = array.map(notice => renderNotice(notice)).join("")
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
	}
};

fetch('https://videogames-news2.p.rapidapi.com/videogames_news/search_news?query=GTA', options)
	.then(response => response.json())
	.then(response => render(response))
	.catch(err => console.error(err));



const trailerGames = (param) => {
    return `
            <div>
                <h3>${param.title}</h3>
                <a href=${param.url} target="_blank">
                    <img src=${param.thumbnail}>
                </a>                
                <a href=${param.url} target="_blank"></a>
                <h6>${param.author}</h6>
                <span>${param.date}</span>
            </div>
    `
}


const renderTrailer = (array) => {
    trailer.innerHTML = array.map(trailer => trailerGames(trailer)).join("")
}


    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016',
            'X-RapidAPI-Host': 'video-games-trailers.p.rapidapi.com'
        }
    };
    
    fetch('https://video-games-trailers.p.rapidapi.com/trailers', options2)
        .then(response => response.json())
        .then(response => renderTrailer(response))
        .catch(err => console.error(err));



const freegames = (param) => {
    return `
            <div>
                <h3>${param.game.name}</h3>
                <img src=${param.game.images.medium}>
                
                <span>Puntaje: ${param.score}</span>
                <h6>Encontralo en ${param.store.name}</h6>
                <a href=${param.store.url}>Click aquí</a>
            </div>
    `
} 

const renderFreeGames = (array) => {
    freeGamesContainer.innerHTML = array.map(g => freegames(g)).join("")
}


        const options3 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016',
                'X-RapidAPI-Host': 'actual-free-games.p.rapidapi.com'
            }
        };
        
        fetch('https://actual-free-games.p.rapidapi.com/free-games?order=ASC', options3)
            .then(response => response.json())
            .then(response => renderFreeGames(response))
            .catch(err => console.error(err));