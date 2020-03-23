const config = require('../config/config');
const fetch = require("node-fetch");


module.exports.getWeatherByCityName = (city) => {
    return getData(city);
};


const getData = async city => {
    try {
        console.log(`${config.baseURL}${'?q='}${city}${'&appid='}${config.appID}`);
      const response = await fetch(`${config.baseURL}${'?q='}${city}${'&appid='}${config.appID}`);
      const json = await response.json();
      return json;

    } catch (error) {
      console.log(error);
    }
  };