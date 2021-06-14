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
    const [sortedData5,newsortedData5]=useState({
        loaded5:false,
    });

    const validatingData = (Data2) => {

    let Values={
        Video:"",
        Classname:"",
        MainClassname1:"",
        HourlyClassname1:"",
        videoOpacity:"",
    };
    if(Data2.loaded1){
        if(Data2.Tempobj.temp>=35){
            Values.Video=Hot;
            Values.Classname="Hot";
            Values.MainClassname1="IF__Content add1Class1";
            Values.HourlyClassname1="Inner__Hourly addClassInHourly1";
            Values.videoOpacity="backgroundCOLOR opacityChange1";
        }
        else if(Data2.Tempobj.temp>=20 && Data2.Tempobj.temp<35){
            Values.Video=Bw;
            Values.Classname="Bw";
            Values.MainClassname1="IF__Content";
            Values.HourlyClassname1="Inner__Hourly";  
            Values.videoOpacity="backgroundCOLOR opacityChange2";
            
        }
        else if(Data2.Tempobj.temp<20){
            Values.Video=Cold;
            Values.Classname="Cold";
            Values.MainClassname1="IF__Content add1Class2";
            Values.HourlyClassname1="Inner__Hourly addClassInHourly2";
            Values.videoOpacity="backgroundCOLOR opacityChange3";
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
            var {dt,feels_like,humidity,sunrise,sunset,temp,wind_speed,visibility,pressure,uvi}=Data.current;
    
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

                // * wind
                wind_speed=Math.round(wind_speed *3.6);
                
                // * visibility
                visibility=Math.round(visibility/1000)

                // * uvi
                if(uvi<3){
                    uvi="low"
                }
                else if(uvi>=3 && uvi<6){
                    uvi="Moderate"
                }
                else if(uvi>=6 && uvi<8){
                    uvi="High"
                }
                else if(uvi>=8 && uvi<11){
                    uvi="Very high"
                }
                else if(uvi>=11){
                    uvi="Extreme"
                }

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
        newsortedData1({Dateobj,Tempobj,humidity,loaded1,wind_speed,visibility,pressure,uvi});
        validatingData({Dateobj,Tempobj,humidity,loaded1,wind_speed,visibility,pressure,uvi});
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
    const villageName=(Data)=>{
        newsortedData5({
            loaded5:true,
            locality:Data.locality
        });
    }
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
        if(position.coords.latitude==="" && position.coords.longitude===""){
            newuserProvidedLoc( {loaded:false})
        }
        else{
            newuserProvidedLoc({loaded:true});
                if(position.coords.latitude!=="" && position.coords.longitude!==""){
                    fetch( `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
                        .then(async(data)=>{
                            const result =await data.json();
                            villageName(result);
                        }).catch(e=>console.log(e));

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
                        // console.log(data);
                    })
                    .catch(err=>console.log("Error"))
                }

        };
    });
    },[ ]);

   


    return {userProvidedLoc,sortedData1,sortedData2,sortedData3,sortedData4,sortedData5}
};

export default CustomHook;
