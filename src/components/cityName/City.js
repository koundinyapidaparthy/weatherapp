import React,{useEffect,useState} from 'react'
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {selectUserName,selectUserColor} from "../../user/userSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
import "../../css/City/city.css";
const City = () => {
    const cityData = {
        forImg:localStorage.getItem("Img"),
        forClass:localStorage.getItem("Class"),
    }
    var userName=useSelector(selectUserName) || localStorage.getItem("cityName");
    var cityColor = useSelector(selectUserColor) || cityData;
    const history= useHistory();
    const [CityData,newCityData]=useState({
        loaded:false,
    })
    const FetchedData =(Data)=>{
        const myDate=new Date(Data.dt *1000);
        const month=myDate.toLocaleString('default', { month: 'short' });
        const today=myDate.getDate();
        const obj={
            loaded:true,
            month:month,
            today:today,
            City:Data.name,
            Country:Data.sys.country,
            temp: Math.round(Data.main.temp),
            feels_like: Math.round(Data.main.feels_like),
            temp_min: Math.round(Data.main.temp_min),
            temp_max:Math.round(Data.main.temp_max) ,
            pressure: Data.main.pressure,
            humidity: Data.main.humidity,
            wind_speed: Data.wind.speed
        };
        newCityData(obj);
    }

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userName}&units=metric&appid=e9f96ca8486c3c3db229029a16c48211`)
        .then(async(response) => {
            if(response.ok){
                const data= await response.json();
                FetchedData(data);
            }
            else{
            }
        })
            .catch(err => {
            throw new Error(err);
        })
    },[userName]);

    const pushingBack=()=>{
        history.goBack();
    }
    return (
        <>
            {
                CityData.loaded ? 
                <>
                    <div className="CITYCONTENT">
                        <div className={cityColor.forImg}>
                            <FontAwesomeIcon icon={faChevronCircleLeft} onClick={pushingBack} className="imgColor"/>
                            <div className="heading__Date">
                                <span>{CityData.today}<sup>th</sup> {" "+CityData.month}</span>
                            </div>
                            <div>
                                <span>{CityData.City} </span>
                                <span>{CityData.Country}</span>
                            </div>
                        </div>
                        <div className={cityColor.forClass}>
                            
                            <div>
                                <span>Temperature:</span>
                                <span>{CityData.temp}<sup>o<sub>C</sub></sup></span>
                            </div>
                            <div>
                                <span>Feels-Like:</span>
                                <span>{CityData.feels_like}<sup>o<sub>C</sub></sup></span>
                            </div>
                            <div>
                                <span>Max and Min:</span>
                                <span>{CityData.temp_max}/{CityData.temp_min}<sup>o<sub>C</sub></sup></span>
                            </div>
                            <div>
                                <span>Pressure:</span>
                                <span>{CityData.pressure} hPa</span>
                            </div>
                            <div>
                                <span>Humidity:</span>
                                <span>{CityData.humidity} %</span>
                            </div>
                            <div>
                                <span>Wind_Speed:</span>
                                <span>{Math.round(CityData.wind_speed *3.6)} km/h</span>
                            </div>
                        </div>
                    </div>
                </>
                : 
                <>
                        <div className="Loading">
                                    <FontAwesomeIcon icon={faChevronCircleLeft} onClick={pushingBack} className="img"/>
                                    {/* {
                                        userName ?
                                        <div className="Waiting">Failed To Fetch { userName}🤔</div>
                                        :
                                        <div className="Waiting">Failed To Fetch😌</div>
                                    } */}
                        </div>
                </>
            }
        </>
    )
}

export default City
