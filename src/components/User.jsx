import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log("user data ", data);
        setUser(data);
      })
      .then((json) => console.log(json))
      .catch((e) => {
        console.log(e);
      });
  },[]);
  return (
    <>
      <h1>USER DATA</h1>
      <ol style={{display:"flex",gap:"2rem",flexWrap:"wrap"}}>
        {user.map((u, id) => (
          <>
            <div className="user" key={id} style={{border:"1px solid",width:"300px",padding:"20px"}}>
              <h6>Name: {u.name}</h6>
              <p>Email:{u.email}</p>
              <p>Username :{u.username}</p>
              <p>Phone :{u.phone}</p>
              <p>Website:{u.website}</p>
              <h6>Address</h6>
              <ul>
                <li>City : {u.address.city}</li>
                <li>Street : {u.address.street}</li>
                <li>Zipcode : {u.address.zipcode}</li>
              </ul>
              <h6>Company</h6>
              <ul>
                <li>Company Name :{u.company.name}</li>
                <li>CatchPhrase :{u.company.catchPhrase}</li>
                <li>BS :{u.company.bs}</li>
              </ul>
            </div>
          </>
        ))}
      </ol>
    </>
  );
};

export default User;
