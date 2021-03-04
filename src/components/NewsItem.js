import React from 'react';

const NewsItem = ({ article }) => {
    const { title, summary, releaseDate , id ,imagePath} = article;   
    
    return (
        <>
        <div className="swiper-slide">
            <div className="thumbnail">
                <a href="#" onClick={e => e.preventDefault()} className="open-news" data-idx={id}>
                    <img src={imagePath !== undefined ? imagePath : '../@resource/images/@thumb/thumb_news_01.jpg'} alt=""/>
                </a>
            </div>
            <div className="detail-wrap">
                <div className="subject">
                    <a href="#" onClick={e => e.preventDefault()} className="open-news" data-idx={id}>
                    {title}
                    </a>
                </div>
                <div className="text">
                    <a href="#" onClick={e => e.preventDefault()} className="open-news" data-idx={id}>
                        <span>{summary}</span>
                    </a>
                </div>
                <span className="date"><a href="#" onClick={e => e.preventDefault()} className="open-news" data-idx={id}>{releaseDate}</a></span>
            </div>
        </div>
        </>
  );
};



export default NewsItem;