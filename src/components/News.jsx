import React, { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  // Fetch news from API
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-11-05&sortBy=publishedAt&apiKey=c73f6650ace64aac80056d43ed3da9a4`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles);
      })
    
  }, []);
  return (
    <>
      <div className="news" style={{display:"flex",gap:"2rem",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
        {news.map((article, id) => {
          return (
            <>
              <div class="card" style={{ width: "18rem" }}>
                <img src={article.urlToImage} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{article.title}</h5>
                  <p class="card-text">{article.description}...</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;
