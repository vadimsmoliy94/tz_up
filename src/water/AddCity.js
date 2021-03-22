import React, { useState, } from 'react';


function AddCity() {
    let [city, setCity] = useState('');


    function getWater(e) {
        e.preventDefault();
        let citi = e.target.elements.citi.value;
        setCity(citi);
        localStorage.setItem('city', citi);
        console.log(e.target.elements.citi.value)
    }

    return (
        <div >
            <form onSubmit={getWater}>
                <input type='text' name='citi' placeholder='введіть місто' />
                <button type='submit'>Ok</button>
            </form>


        </div>
    );
}

export default AddCity;
