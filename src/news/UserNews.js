import React, { useEffect, useState, } from 'react';


function Profile() {
    let [newsProfile, setNewsProfile] = useState(null);




    useEffect(() => {

        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e1d96f3c365c4c619d25d21706c661c3')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setNewsProfile(json.articles);
            })
    }, []);




    { if (!newsProfile) return <div>Loading</div> }

    return (

        < div >
            <ul>
                {newsProfile.map((item, index) => {
                    return <li key={item.publishedAt}>
                        <div>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                            <p>{item.publishedAt}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div >
    );
}

export default Profile;
