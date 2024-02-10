import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [dataa, setData] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results[0]);
      })
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <div className="div">
      <div className="cardOut">
        <div className="cardIn">
          <div className="img">
            <img src={dataa?.picture?.large} alt="imgg" />
          </div>
          <div className="description">
            <div className="name">
              <h2>
                {dataa?.name?.title} {dataa?.name?.first}
              </h2>
              <h2>{dataa?.name?.last}</h2>
            </div>
            <h3>{dataa?.gender}</h3>
            <h3>{dataa?.phone}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
