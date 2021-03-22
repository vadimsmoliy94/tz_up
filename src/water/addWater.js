import React, { useEffect, useState, } from 'react';
import AddCity from './AddCity';


function AddWater() {
    let [dat, setDat] = useState(null);
    let [city, setCity] = useState(localStorage.getItem('city'));

    const keyApi = '3b619c0fd2bccff4a04b079b6cb9ba14';


    useEffect(() => {


        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setDat(data);
                console.log(data);
            });

    }, [city])
    { if (!dat) return <div>Loading</div> }

    return (
        <div >
            <AddCity />
            <div>
                <h2>{dat.name}
                    <img src={`http://openweathermap.org/img/w/${dat.weather[0].icon}.png`} alt={dat.weather[0].description} />
                </h2>
                <p>Current: {dat.main.temp}°С</p>
                <p>High: {dat.main.temp_max}°С</p>
                <p>Low: {dat.main.temp_min}°С</p>
                <p>Wind Speed: {dat.wind.speed} м/с</p>
                <p>Visibility: {dat.visibility} m</p>
            </div>
        </div>
    );
}

export default AddWater;
