import axios from 'axios';

export default function () {
	
	var city="Moscow";
	var api = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=03d17efcc1443561cd0b9ad3b5effe36'
	return [
			axios.get(api)
				.then(function (response) {
					console.log(response.data)
					return response;
				})
			]
}

