import React from 'react'
import "../../css/Pressure/Pressure.css"
const Pressure = (Data) => {
    const WeatherDetails=Data.ArrayData;
    return (
        <>
            <div className="Girdding__Content">
                <div>
                    <span>{Math.round(WeatherDetails.Tempobj.feels_like)}<sup>o<sub>C</sub></sup></span>
                    <span>Feels Like</span>
                </div>
                <div>
                    <span>{WeatherDetails.visibility} km</span>
                    <span>Visibility</span>
                </div>
                <div>
                    <span>{WeatherDetails.pressure} hPa</span>
                    <span>Air Pressure</span>
                </div>
                <div>
                    <span>{WeatherDetails.uvi}</span>
                    <span>UV</span>
                </div>
                <div>
                    <span>{WeatherDetails.humidity} %</span>
                    <span>Humidity</span>
                </div>
                <div>
                    <span>{WeatherDetails.wind_speed}km/h</span>
                    <span>Wind Speed</span>
                </div>
            </div>
        </>
    )
}

export default Pressure
