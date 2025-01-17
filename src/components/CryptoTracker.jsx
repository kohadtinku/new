import React, { useEffect, useState } from "react";

const CryptoTracker = () => {
  const [crypto, setCrypto] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = () => {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then((res) => res.json())
        .then((data) => {
          console.log("cryptodata", data);
          setCrypto(data);
          setError(null);
        })
        .catch((e) => {
          console.log(e);
          setError("Failed To fetch crypto data");
        });
    };

    fetchData();

    const intervalid = setInterval(fetchData, 10000);
    return () => clearInterval(intervalid);
  }, []);

  
  return (
    <>
      <div className="crypto">
        <ol
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            padding: "20px",
            gap: "2rem",
          }}
        >
          {crypto.map((crypto, id) => {
            return (
              <li>
                <div
                  key={id}
                  style={{
                    border: "1px solid red",
                    width: "200px",
                    padding: "20px",
                  }}
                >
                  <h4>{crypto.name}</h4>
                  <img src={crypto.image} alt="" style={{ width: "100px" }} />
                  <p>Price : ${crypto.current_price}</p>
                  <p>Market Cap : ${crypto.market_cap}</p>
                  <p>All Time High : {crypto.ath}</p>
                  <p>All Time Low : {crypto.atl}%</p>
                  <p>24h Change : {crypto.price_change_24h}%</p>
                  <p>Symbol : {crypto.symbol}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default CryptoTracker;


// import React, { useEffect, useState } from "react";

// const CryptoTracker = () => {
//   const [crypto, setCrypto] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchData = () => {
//       fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log("cryptodata", data);
//           setCrypto(data);
//           setError(null);
//         })
//         .catch((e) => {
//           console.log(e);
//           setError("Failed To fetch crypto data");
//         });
//     };

//     fetchData();

//     const intervalid = setInterval(fetchData, 10000);
//     return () => clearInterval(intervalid);
//   }, []);

//   // Filter the crypto data based on the search term
//   const filteredCrypto = crypto.filter((coin) =>
//     coin.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div className="crypto">
//         <input
//           type="text"
//           placeholder="Search Cryptocurrency"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: "10px",
//             marginBottom: "20px",
//             width: "100%",
//             maxWidth: "300px",
//           }}
//         />

//         {error && <p>{error}</p>}

//         <ol
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             flexWrap: "wrap",
//             padding: "20px",
//             gap: "2rem",
//           }}
//         >
//           {(() => {
//             const elements = [];
//             for (let i = 0; i < filteredCrypto.length; i++) {
//               const coin = filteredCrypto[i];
//               elements.push(
//                 <li key={i}>
//                   <div
//                     style={{
//                       border: "1px solid red",
//                       width: "200px",
//                       padding: "20px",
//                     }}
//                   >
//                     <h4>{coin.name}</h4>
//                     <img src={coin.image} alt="" style={{ width: "100px" }} />
//                     <p>Price : ${coin.current_price}</p>
//                     <p>Market Cap : ${coin.market_cap}</p>
//                     <p>All Time High : {coin.ath}</p>
//                     <p>All Time Low : {coin.atl}%</p>
//                     <p>24h Change : {coin.price_change_24h}%</p>
//                     <p>Symbol : {coin.symbol}</p>
//                   </div>
//                 </li>
//               );
//             }
//             return elements;
//           })()}
//         </ol>
//       </div>
//     </>
//   );
// };

// export default CryptoTracker;

