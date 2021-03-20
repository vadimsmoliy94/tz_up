import React, { useEffect, useState, } from 'react';


function Water() {
    let [dat, setDat] = useState(null);

    const keyApi = '3b619c0fd2bccff4a04b079b6cb9ba14';


    // useEffect(() => {


    //         fetch(`http://${keyApi}`)
    //             .then((response) => {
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 setDat(data);
    //                 console.log(data);
    //             });

    // }, [])



    function getWater(e) {
        e.preventDefault();
        let citi = e.target.elements.citi.value;

        console.log(e.target.elements.citi.value)
    }

    return (
        <div >
            <form onSubmit={getWater}>
                <input type='text' name='citi' placeholder='введіть місто' />
                <button type='submit'>Ok</button>
            </form>
            <div>
                <ul>
                    {/* <li>{data.name}</li>
                    <li>{data.main.temp}</li> */}
                </ul>
            </div>
            <p>{citi}</p>
        </div>
    );
}

export default AddWater;
