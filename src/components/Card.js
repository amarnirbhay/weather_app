import React, {useContext} from "react";
import { useStore } from "../apis/Store";
import index from "./index.css";
const Card = () => {
    let {data} = useContext(useStore);
    console.log(data);
  
 if(data) {
        return (
            <body>
                 <div className="Card" key={Math.random}>

                <p className="temp">
                <h2>📍{data[0].name} | {data[0].sys.country}</h2>
                <h1 className="temp1">
                🌡️{data[0].main.temp}<sup>o</sup>C <br />
                </h1>
                <h5><b>Min:</b> {data[0].main.temp_min}<sup>o</sup>C <br/>
                 <b>Max:</b> {data[0].main.temp_max}<sup>o</sup>C</h5> 
                </p>
                <p className="img">
                <img
                  src={`http://openweathermap.org/img/wn/${data[0].weather[0].icon}@2x.png`}
                  width="200px"
                /> 
                 <h5>Clouds : {data[0].clouds.all}</h5>
                 </p>
                <div className="des">
               <h1> {data[0].weather[0].description} </h1>
               
               <p>   <b> Humidity:</b> 💧{data[0].main.humidity}%</p>
               <p><b>Wind:</b> 🌬️{data[0].wind.speed} km/h</p>
               </div>
            </div>
            </body>
        );
    } else {
     return <span>♦️ Search a city....To know the 🌧️<b>WEATHER</b>🌦️</span>;
    
     

    }
   

};
export default Card; 