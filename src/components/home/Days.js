import React from 'react'
import "../../css/Days/Days.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud,faCloudRain} from '@fortawesome/free-solid-svg-icons';

const Days = (Data) => {
    console.log(Data);
    const Daily=Data.ArrayData;
    const Reduced= [];
        for(let i=0;i<Daily.length;i++){
            const myDate=new Date(Daily[i].dt *1000);
            if(Daily[i].weather[0].main[0]==="R"){
                const obj={
                    Month:myDate.toLocaleString('default', { month: 'short' }),
                    Date:myDate.getDate(),
                    Image:faCloud,
                    Desc:Daily[i].weather[0].description,
                    Tmax:Math.round(Daily[i].temp.max),
                    Tmin:Math.round(Daily[i].temp.min)
                }
                Reduced.push(obj);
            }
            else{
                const obj={
                    Month:myDate.toLocaleString('default', { month: 'short' }),
                    Date:myDate.getDate(),
                    Image:faCloudRain,
                    Desc:Daily[i].weather[0].description,
                    Tmax:Math.round(Daily[i].temp.max),
                    Tmin:Math.round(Daily[i].temp.min)
                }
                Reduced.push(obj);
            }
            
        }
        console.log(Reduced);
    return (
        <>
        <table>
                <thead />
                <tbody>
            {
                Reduced.map((data,index)=>{
                    return (
                                <tr key={index}>
                                    <td>{data.Month}</td>
                                    <td>{data.Date}</td>
                                    <td><FontAwesomeIcon icon={data.Image} className="img" /></td>
                                    <td>{data.Desc}</td>
                                    <td>{data.Tmax}/{data.Tmin}<sup>o<sub>C</sub></sup></td>
                                 </tr>
                    )
                })
            }
            </tbody>
        </table>
        </>
    )
}

export default Days
