import React,{useState,useRef} from 'react'
import "../../css/HomeWeather/homeweather.css"
import useGeolocation from "./useGeolocation";
import Hourly from "./Hourly";
import Days from "./Days";
import Pressure from "./Pressure";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt,faBars,faTimesCircle,faRocket} from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from "react-redux"; 
import {useHistory} from "react-router-dom";
import {setUserLoginDetails} from "../../user/userSlice";
const HomeWeather = () => {
    const dispatch=useDispatch();
    const history = useHistory();
    const ref=useRef(null);
    const [color,newColor]=useState(false);
    const [clicked,newClicked]=useState(false);
    const {userProvidedLoc,sortedData1,sortedData2,sortedData3, sortedData4,sortedData5}=useGeolocation();
    if( userProvidedLoc.loaded && sortedData1.loaded1  && sortedData2.loaded2 && sortedData3.loaded3 &&  sortedData4.loaded4 && sortedData5.loaded5){
        const changeColor=()=>{
            if(window.scrollY>=200){
                newColor(true)
            }
            else{
                newColor(false)
            }
        }
        window.addEventListener("scroll", changeColor);
    }
    const fullScreen1=()=>{newClicked(true);}
    const fullScreen2=()=>{newClicked(false);}
    const reloading=()=>{window.location.reload();}
    const sendingData=(event)=>{
        const cityName=document.getElementById("InputName").value.trim();
        const regexpattern=/^[A-Za-z]+$/;
            if(cityName===""){
            }
            else if(!cityName.match(regexpattern)){
                alert("enter valid city name");
            }
            else{
                dispatch(
                    setUserLoginDetails({
                        name:cityName,
                        color:sortedData2.Values.DispatchColor,
                    })
                )
                localStorage.setItem("cityName", cityName);
                localStorage.setItem("Img", sortedData2.Values.DispatchColor.forImg);
                localStorage.setItem("Class", sortedData2.Values.DispatchColor.forClass);
                history.push("/city");
            }
    }
    const gotoFeedback=()=>{
        history.push("/feedback");
    }
    const EnterButtonClicked = (q) => {
        if (q.keyCode === 13) {
            sendingData();
        }
    }
    return (
        <div className="Main">
            {
                userProvidedLoc.loaded && sortedData1.loaded1  && sortedData2.loaded2 && sortedData3.loaded3 &&  sortedData4.loaded4 && sortedData5.loaded5?
                <>
                    <div className="travel1"></div>
                    {clicked ? 
                        <div className="menu">
                            <div className="menu__box">
                                <FontAwesomeIcon icon={faTimesCircle} className="img2" onClick={fullScreen2} />
                                <div className="menu__center">
                                    <div><span className="feedback" onClick={gotoFeedback}>@feedback</span></div>
                                </div>
                            </div>
                        </div>
                    :<></>}
                        <div className={!color ? sortedData2.Values.headerClassname1 : sortedData2.Values.headerClassname2 }>
                            <FontAwesomeIcon icon={sortedData2.Values.icon} className="img" onClick={reloading} />
                            <div className="input__icon">
                                <input type="text" placeholder="&#xF002;  City" ref={ref} onKeyUp={EnterButtonClicked } id="InputName"  />
                                <FontAwesomeIcon icon={faRocket} className="img" onClick={sendingData} />
                            </div>
                            <FontAwesomeIcon icon={faBars} className="img1" onClick={fullScreen1} />
                        </div>
                    <div className={!color ? "backgroundCOLOR" : sortedData2.Values.videoOpacity}></div>
                    <div className="Fetched__Main">
                            <video className={sortedData2.Values.Classname} autoPlay muted loop id="VideoChange" >
                                <source  src={sortedData2.Values.Video} type="video/mp4" ></source>
                            </video>
                    </div>
                        <div className="Fetched__Content">

                            <div className={sortedData2.Values.MainClassname1} /* IF__Content*/  >
                                <div className="Current__Temp">{Math.round(sortedData1.Tempobj.temp)}<sup>o<sub>C</sub></sup></div>
                                <div className="High__Low">{Math.round(sortedData3.maxe)}<sup>o<sub>C</sub></sup>
                                <span>/</span> {Math.round(sortedData3.mine)}<sup>o<sub>C</sub></sup></div>
                                <div className="Cureent__locality">
                                    {sortedData5.locality}
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="img" />
                                </div>
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




