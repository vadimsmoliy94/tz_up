import React, { useEffect, useState, } from 'react';


function Water() {
    let [dat, setDat] = useState(null);

    const keyApi = '3b619c0fd2bccff4a04b079b6cb9ba14';


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude, position.coords.longitude);

            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${keyApi}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setDat(data);
                    console.log(data);
                });
        });
    }, [])


    { if (!dat) return <div>Loading</div> }
    const iconUrl = `http://openweathermap.org/img/w/${dat.weather[0].icon}.png`;
    return (

        < div >

            <h2>{dat.name}
                <img src={iconUrl} alt={dat.weather[0].description} />
            </h2>
            <p>Current: {dat.main.temp}°С</p>
            <p>High: {dat.main.temp_max}°С</p>
            <p>Low: {dat.main.temp_min}°С</p>
            <p>Wind Speed: {dat.wind.speed} м/с</p>
            <p>Visibility: {dat.visibility} m</p>


        </div >
    );
}

export default Water;
// 0756ff7d5f4c7151386437e19dc282d5
// api.openweathermap.org/data/2.5/weather?q=London&appid=3b619c0fd2bccff4a04b079b6cb9ba14
// api.openweathermap.org / data / 2.5 / weather ? lat = 35 & lon=139 & appid={ API key }