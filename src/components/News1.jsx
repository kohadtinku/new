import { useEffect, useState } from "react";

const News1 = () => {
  const [news, setNews] = useState([]);
  const [query,setQuery] = useState("cricket")

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2024-11-05&sortBy=publishedAt&apiKey=c73f6650ace64aac80056d43ed3da9a4`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {news.map((item, id) => {
        return (
          <>
            <div key={id} class="card" style={{ width: "18rem" }}>
              <img
                src={item.urlToImage}
                class="card-img-top"
                alt="..."
                style={{ height: "200px" }}
              />
              <div class="card-body">
                <h5 class="card-title">{item.title}...</h5>
                <p class="card-text">
                  Description:
                  {item.description}...
                </p>

                <a href={item.url} class="btn btn-primary" target="_black">
                  READ MORE
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default News1;
