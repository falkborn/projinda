import React, { useState, useEffect } from 'react'
import { FaNewspaper } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import './CryptoNews.css'




const axios = require("axios");


const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: { safeSearch: 'Off', textFormat: 'Raw' },
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '36b0cb744dmsh349ca2813dbde1ep14b9bcjsn0ec259120f7d'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});



const CryptoNews = (props) => {
    const params = useParams()

    const [news, setNews] = useState({})

    useEffect(() => {
        axios.get(options.url).then((response) => {
            setNews(response.data)
        }).catch((error) => {
            console.log(error)
        })
    })





    return (
        <div>
            <div className='news-container'>
                <div className='news-content'>
                    <h1>{news.name}</h1>
                </div>
                <div className='info'>
                    <div className='news-heading'>
                       <img src ={news?.image?.thumbnail?.options.url} alt="" />
                       <title className='news-title' >{news.name}</title>
                    </div>
                    <p>{news.description.length > 100 ? '$(news.description.substring(0,100)}...': news.description}</p>
                    <div className='provider-container'>
                        <div src = {news.provider[0]?.image?.thumbnail?.options.url} alt="" />
                        <text className='provider-name'>{news.provider[0]?.name}</text>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default CryptoNews