import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    const api_key = '3ae5f57c8451400fa0ae7cd93d55346b'
    const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-01-23&sortBy=publishedAt&apiKey=${api_key}`

    const [news, setNews] = useState([])

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => {
    //             setNews(data.articles)
    //             localStorage.setItem('news', JSON.stringify(data.articles))
    //         })
    // }, [url])

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('news'))
        setNews(localStorageData)
    }, [])

    const handleNavigateToDetails = (item) => {
        navigate('/newsDetails', { state: { item } })
    }

    return (
        <div className="news">
            {news.map((item, index) => {
                return (
                    <div className='news-item' key={index} onClick={() => handleNavigateToDetails(item)}>
                        <img src={item.urlToImage} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home