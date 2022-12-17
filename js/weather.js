const value = document.querySelector("#weather")
const buscarWeather = document.querySelector("#buscar")
const weatherContainer = document.querySelector("#weatherContainer")


const weather = (param) => {
    return`
            <div>
                <h3>${param.name}</h3>
            </div>
    `
}

const weatherRender = (arr) => {
    weatherContainer.innerHTML = arr.map(x => weather(x)).join("")
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0163d9448cmshc2ee42516cb00b0p1ddc1cjsn3d9895605016',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


function buscar(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+value.value+'&appid=fcfaf0816fc485a804d81b25c453cf5b')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

buscarWeather.addEventListener("click", buscar)