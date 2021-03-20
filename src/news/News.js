import React, { useEffect, useState, } from 'react';


function News() {
    let [news, setNews] = useState(null);




    useEffect(() => {

        fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e1d96f3c365c4c619d25d21706c661c3')
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setNews(json.articles);
            })
    }, []);




    { if (!news) return <div>Loading</div> }

    return (

        < div >
            <ul>
                {news.map((item, index) => {
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

export default News;
