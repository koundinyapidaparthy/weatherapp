import "../../scss/hourly.css"; 
const Hourly = (ArrayData) => {
    var Arr=ArrayData.ArrayData;
    var newArr=[];
    for(let i=0;i<Arr.length;i++){
        const myDate=new Date(Arr[i].dt *1000);
        const newval=myDate.getHours();
        const obj={
            hours:newval,
            temp:Math.round(Arr[i].temp),
        }
        newArr.push(obj);
    }
    // console.log(newArr);
    return (
        <>
        <div className="Hourly__Main">
        {
            newArr.map((data,index)=>{
                return(
                            <div className="Inner__Hourly" key={index}>
                                <div className="Hourly__Hours">
                                    {data.hours} : 00
                                </div>
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
