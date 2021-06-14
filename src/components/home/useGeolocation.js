import { useEffect, useState } from "react"
import Hot from "../../videos/Hot.mp4"
import Bw from "../../videos/BW.mp4"
import Cold from "../../videos/Cold.mp4"
const CustomHook = () => {
    const [userProvidedLoc,newuserProvidedLoc]=useState({
        loaded:false
    });
    const [sortedData1,newsortedData1]=useState({
        loaded1:false
    });
    const [sortedData2,newsortedData2]=useState({
        loaded2:false
    });
    const [sortedData3,newsortedData3]=useState({
        loaded3:false
    });
    const [sortedData4,newsortedData4]=useState({
        loaded4:false
    });

    const validatingData = (Data2) => {

    let Values={
        Video:"",
        Classname:"",
        MainClassname1:"",
        HourlyClassname1:"",
    };
    if(Data2.loaded1){
        if(Data2.Tempobj.temp>=35){
            Values.Video=Hot;
            Values.Classname="Hot";
            Values.MainClassname1="IF__Content add1Class1";
            Values.HourlyClassname1="Inner__Hourly addClassInHourly1";
        }
        else if(Data2.Tempobj.temp>=20 && Data2.Tempobj.temp<35){
            Values.Video=Bw;
            Values.Classname="Bw";
            Values.MainClassname1="IF__Content";
            Values.HourlyClassname1="Inner__Hourly";  

            
        }
        else if(Data2.Tempobj.temp<20){
            Values.Video=Cold;
            Values.Classname="Cold";
            Values.MainClassname1="IF__Content add1Class2";
            Values.HourlyClassname1="Inner__Hourly addClassInHourly2";
        }
        

        newsortedData2({
            loaded2:true,
            Values
        })
    }
}


    const FetchingCurrent=(Data)=>{
        if(Data){
            //  *  current
            var {dt,feels_like,humidity,sunrise,sunset,temp,wind_speed}=Data.current;
    
            // ? Date change
                // * dt
                var myDate=new Date(dt *1000);
                const month=myDate.toLocaleString('default', { month: 'short' });
                const weekday=myDate.toLocaleString('default', { weekday: 'long' });
                const today=myDate.getDate();
    
                // * sunrise
                var mySunrise=new Date(sunrise *1000);
                const SunriseTime=`${mySunrise.getHours()}:${mySunrise.getMinutes()}`
                
                // * sunset
                var mySunset=new Date(sunset *1000);
                const SunsetTime=`${mySunset.getHours() >12 ? mySunset.getHours()-12 :mySunset.getHours()}:${mySunset.getMinutes()}`
    
            // ? new objects
            var Dateobj={
                CurrentDate:{month,weekday,today},
                SunriseTime,
                SunsetTime
            }
            var Tempobj={
                feels_like,temp
            }
        }
        if(Dateobj!==undefined){
            var loaded1=true;
        }
        newsortedData1({Dateobj,Tempobj,humidity,loaded1,wind_speed});
        validatingData({Dateobj,Tempobj,humidity,loaded1,wind_speed});
    }

    const FetchingHourly=(Data)=>{
        const Hourly=Data.hourly;
        var mine=Number.MAX_VALUE;
        var maxe=Number.MIN_VALUE;
        for(let i=0;i<Hourly.length;i++){
            if(Hourly[i].temp>maxe){
                maxe=Hourly[i].temp;
            }
            if(Hourly[i].temp<mine){
                mine=Hourly[i].temp;
            }
        }
        newsortedData3({
            loaded3:true,
            Hourly,
            mine,maxe
        })
    }
    const FetchingDaily=(Data)=>{
        const Daily=Data.daily;
        
        newsortedData4({
            loaded4:true,
            Daily
        })
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
        if(position.coords.latitude==="" && position.coords.longitude===""){
            newuserProvidedLoc( {loaded:false})
        }
        else{
            newuserProvidedLoc({loaded:true});
                if(position.coords.latitude!=="" && position.coords.longitude!==""){
                    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=e9f96ca8486c3c3db229029a16c48211`)
                    .then(response => {
                        if(response.ok){
                            return  response.json()
                        }
                    })
                    .then(data=>{
                        FetchingCurrent(data);
                        FetchingHourly(data);
                        FetchingDaily(data);
                    })
                    .catch(err=>console.log("Error"))
                }

        };
    });
    },[ ]);

   


    return {userProvidedLoc,sortedData1,sortedData2,sortedData3,sortedData4}
};

export default CustomHook;
