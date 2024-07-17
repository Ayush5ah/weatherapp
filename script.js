const apiKey = "f152517b04msh301d9c32dfd22f1p16c09ejsnbffa23402277";
const apiHost = "weatherapi-com.p.rapidapi.com";
const urlBase = `https://${apiHost}/current.json`;

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
    }
};

async function fetchData(city) {
    try {
        const response = await fetch(`${urlBase}?q=${city}`, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

const getWeather = async (city) => {
    try {
        const data = await fetchData(city);
        console.log(data);
        
        if (data) {
            cityName.innerHTML = city;
            temp.innerHTML = data.current.temp_c;
            temp2.innerHTML = data.current.temp_c;
            feels_like.innerHTML = data.current.feelslike_c;
            humidity.innerHTML = data.current.humidity;
            humidity2.innerHTML = data.current.humidity;
            min_temp.innerHTML = data.current.windchill_c;
            max_temp.innerHTML = data.current.heatindex_c;
            wind_speed.innerHTML = data.current.wind_kph;
            wind_speed2.innerHTML = data.current.wind_kph;
            wind_degrees.innerHTML = data.current.wind_degrees;
            sunrise.innerHTML = "5:02 AM";
            sunset.innerHTML = "6:23 PM";
        }
    } catch (err) {
        console.error(err);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

// Example to get weather for Kolkata on initial load
getWeather("Kolkata");
