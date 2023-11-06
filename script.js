let key = 'ba8f7ffb7052443b0f2738727c8a5ef9';
let city = document.getElementById('city');
let desc = document.getElementById('desc');
let windspeed = document.getElementById('windspeed');
let hum = document.getElementById('hum');
let temp = document.getElementById('temp');


function fetchData() {
	
	let cityname = document.getElementById('cityname').value;
	let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;

	fetch(api)
	.then(repsonse=>repsonse.json())
	.then(data=>{
		city.innerHTML = data.name;
		desc.innerHTML = data.weather[0].description;
		windspeed.innerHTML = data.wind.speed;
		hum.innerHTML = data.main.humidity;
		temp.innerHTML = data.main.temp-273;
	})
}
