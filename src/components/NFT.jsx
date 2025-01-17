import React, { useEffect, useState } from "react";

const NFT = () => {
  const [nft, setNft] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((data) => {
        setNft(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div>
        <h1>NFT Data</h1>

        <div style={{display:"flex",flexWrap:"wrap",gap:"2rem",alignItems:"center",justifyContent:"center"}}>
          {nft.map((data, id) => {
            return (
              <>
                <div class="card" style={{ width: "18rem" }}>
                  <img src={data.image} class="card-img-top" alt="..." style={{height:"100px",width:"100px"}}/>
                  <div class="card-body">
                    <h5 class="card-title">Name: {data.name}</h5>
                    <p class="card-title">Symbol: {data.symbol}</p>
                    <p class="card-text">All Time High: {data.ath}</p>
                    <p>
                      Market Cap
                      <a href="#" class="text-primary">
                        {data.market_cap}
                      </a>
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NFT;
