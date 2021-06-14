import React,{useState} from 'react'
import "../../css/HomeWeather/homeweather.css"
import useGeolocation from "./useGeolocation";
import Hourly from "./Hourly";
import Days from "./Days";
import Pressure from "./Pressure";
const HomeWeather = () => {
    const [color,newColor]=useState(false);
    const {userProvidedLoc,sortedData1,sortedData2,sortedData3, sortedData4}=useGeolocation();
    if( userProvidedLoc.loaded && sortedData1.loaded1  && sortedData2.loaded2 && sortedData3.loaded3 &&  sortedData4.loaded4){
        // console.log({userProvidedLoc,sortedData1,sortedData2,sortedData3,sortedData4});
        // console.log(sortedData1);
        const changeColor=()=>{
            if(window.scrollY>=200){
                newColor(true)
            }
            else{
                newColor(false)
            }
        }
        window.addEventListener("scroll",changeColor);
    }
    return (
        <div className="Main">
            {
                userProvidedLoc.loaded && sortedData1.loaded1  && sortedData2.loaded2 && sortedData3.loaded3 &&  sortedData4.loaded4?
                <>
                    <div className="travel1"></div>
                    <div className="Fetched__Main">
                        <video className={!color ? sortedData2.Values.Classname : sortedData2.Values.videoOpacity}  loop autoPlay muted>
                            <source  src={sortedData2.Values.Video} type="video/mp4" ></source>
                        </video>
                    </div>
                        <div className="Fetched__Content">
                            <div className={sortedData2.Values.MainClassname1} /* IF__Content*/  >
                                <div className="Current__Temp">{Math.round(sortedData1.Tempobj.temp)}<sup>o<sub>C</sub></sup></div>
                                <div className="High__Low">{Math.round(sortedData3.maxe)}<sup>o<sub>C</sub></sup>
                                <span>/</span> {Math.round(sortedData3.mine)}<sup>o<sub>C</sub></sup></div>
                                 <div className="Content__HourlyLabel">24-hour weather report</div>
                                <Hourly ArrayData={sortedData3.Hourly} sendClass={sortedData2.Values.HourlyClassname1} /*Inner__Hourly*/ />
                                <div className="Content__HourlyLabel">7-day weather report</div>
                                <Days ArrayData={sortedData4.Daily}  />
                                <div className="Content__HourlyLabel">weather details</div>
                                <Pressure ArrayData={sortedData1}/>
                            </div>
                            
                        </div>
                </>
                :
                <>
                    {  
                     userProvidedLoc.loaded?
                     <>
                        <div className="Loading">
                            <div className="Waiting">Fetching Data <span>.....</span></div>
                        </div>
                     </>
                     :
                     <>
                        <div className="Default">
                            Provide location
                        </div>
                     </>
                    }
                </> 
            }
        </div>
    )
}

export default HomeWeather




