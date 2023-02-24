import React from 'react'
import { useLocation } from 'react-router-dom'

function NewsDetails() {
    const location = useLocation();
    const newsDetails = location.state.item;
    const { author, content, description, publishedAt, title, url, urlToImage } = newsDetails

    return (
        <div className='container p-5 mb-5' style={{ border: '1px solid black' }}>
            <div style={{ margin: 'auto', maxWidth: '900px' }}><img src={urlToImage} alt="" className='img-details mb-5' style={{ width: '100%', display: 'block' }} /></div>
            <h1>{title} </h1>
            <h4 style={{ color: '#aaa' }}><b> Author: </b>{author}</h4>
            <p>{description}</p>
            <p>{content}</p>
            <p><b>Original News:</b> <a target="_blank" rel="noreferrer" href={url}>{url}</a></p>
        </div >
    )
}

export default NewsDetails