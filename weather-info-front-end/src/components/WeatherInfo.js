import React, { Component } from 'react'

import axios from 'axios';


export class WeatherInfo extends Component {

    

    constructor(props){
        super(props);

        this.state= {
            cities : ['New York', 'Chicago', 'Houston'],
            activeCity : 'New York'
        };
        
        this.getWeatherInfo = this.getWeatherInfo.bind(this);
        this.setActive = this.setActive.bind(this);
    }

    getWeatherInfo = () => {

        var self = this;
        axios.get(`http://localhost:5000/weather/getWeatherByCityName?q=${self.state.activeCity}`)
        .then(res => {
            debugger;
            if(res.status == 200){
                self.setState({
                    weatherInfo : res.data
                });
            }
        });
    }

    setActive = (city) => {
        console.log(`City selected is ${city}`);
        this.setState({
            activeCity : city,
            weatherInfo : city == this.state.activeCity ? this.state.weatherInfo : null
        });
    }

    render() {
        return (
            <div>
                
                <div className="list-group-wrapper">
                <ul className="list-group" >
                    
                    {
                        this.state.cities.map((city) => {
                            return <li  className={this.state.activeCity == city ? 'list-group-item active' : 'list-group-item'} key={city} onClick={this.setActive.bind(this, city)} >{city}</li>
                        })
                    }

                </ul>
                </div>

                <div className="button-group-wrapper">
                <button className="btn btn-primary"  onClick={this.getWeatherInfo.bind(this)}>Get Weather</button>
                </div>
                
                {
                    !!this.state.weatherInfo && 
                    <div className="weather-info" >
                    
                    <div>
                <b>Temerature</b> : <span>{this.state.weatherInfo.main.temp} Kelvin</span>
                    </div>

                    
                    <div>
                <b>Feels Like</b> : <span>{this.state.weatherInfo.main.feels_like} Kelvin </span>
                    </div>

                    
                    <div>
                <b>Min.Temperature</b> : <span>{this.state.weatherInfo.main.temp_min} Kelvin</span>
                    </div>

                    
                    <div>
                <b>Max.Temperature</b> : <span>{this.state.weatherInfo.main.temp_max} Kelvin</span>
                    </div>
                </div>

                }
                
            </div>
        )
    }
}



export default WeatherInfo;
