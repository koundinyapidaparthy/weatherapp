import "../../css/Hours/hourly.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner,faCloudSun,faCloudSunRain,faCloudMoonRain,faCloudMoon } from '@fortawesome/free-solid-svg-icons';

// TODO:
// newval bring sunset and sunrise.


const Hourly = (Data) => {
    var Arr=Data.ArrayData;
    var newArr=[];
    for(let i=0;i<Arr.length - 24;i++){
        const myDate=new Date(Arr[i].dt *1000);
        const newval=myDate.getHours();
        const obj={
            hours:newval,
            temp:Math.round(Arr[i].temp),
            main:"",
            desc:Arr[i].weather[0].description
        }
        if(Arr[i].weather[0].main[0]==="R"){
            if(newval>=19 || newval<=6){
                obj.main="NC"+Arr[i].weather[0].main[0];
            }
            else{
                obj.main="MC"+Arr[i].weather[0].main[0];
            }
        }
        else if(Arr[i].weather[0].main[0]==="C"){
            if(newval>=19 || newval<=6){
                obj.main="N"+Arr[i].weather[0].main[0];
            }
            else{
                obj.main="M"+Arr[i].weather[0].main[0];
            }
        }
        else{
            obj.main=Arr[i].weather[0].main[0];
        }
        if(obj.main==="MCR"){
            obj.main=faCloudSunRain;
        }
        else if(obj.main==="MC"){
            obj.main=faCloudSun;
        }
        else if(obj.main==="NCR"){
            obj.main=faCloudMoonRain;
        }
        else if(obj.main==="NC"){
            obj.main=faCloudMoon;
        }
        else{
            obj.main=faSpinner;
        }
        newArr.push(obj);
    }
    return (
        <>

        <div className="Hourly__Main">
        {
            newArr.map((data,index)=>{
                return(
                            <div className={Data.sendClass} key={index}>
                                <div className="Hourly__Hours">
                                    {data.hours} : 00
                                </div>
                                <FontAwesomeIcon icon={data.main} className="img" />
                                <div className="Hourly__Temp">
                                    {data.temp}
                                </div>
                            </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Hourly

