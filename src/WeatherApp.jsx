import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city: "Wonderland",
        feelsLike:41.05,
        humidity: 62,
        temp: 34.05,
        tempMax: 34.05,
        tempMin: 34.05,
        weather: "haze"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
    <div style={{textAlign: "center"}}>
        <h2>Weather App by Kajal</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    );
}