import axios from 'axios';

const dailyWeather = "http://api.openweathermap.org/data/2.5/weather?q="
//getting API end
const tail = "&APPID=cf7e76712d8e1b265b48e867e57bd091"

const fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast?q="
const fiveDayTail = "&cnt=5"

//1 variable 2 methods
let WeatherFetcher = {
	fetchDailyWeather: function(city){
		let url = dailyWeather + city + tail;
		return axios.get(url)
	},
	fetchFiveDayWeather: function(city){
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher;
