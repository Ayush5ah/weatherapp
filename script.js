const url = 'https://weather-api-by-any-city.p.rapidapi.com/weather/London';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f152517b04msh301d9c32dfd22f1p16c09ejsnbffa23402277',
		'x-rapidapi-host': 'weather-api-by-any-city.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
const getWeather=(city)=>{
    cityName.innerHTML=city
    fetch('https://weather-api-by-any-city.p.rapidapi.com/weather/?city='+city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        temp.innerHTML = response.temp_c
        temp2.innerHTML = response.temp_c
        feels_like.innerHTML = response.feelslike_c
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.windchill_c
        max_temp.innerHTML = response.heatindex_c
        wind_speed.innerHTML = response.wind_kph
        wind_speed2.innerHTML = response.wind_kph
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.is_day
        sunset.innerHTML = response.is_day
    } )

    .catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Kolkata")

