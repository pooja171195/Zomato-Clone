import { useState, useEffect } from "react";
import axios from "axios";
import "./OnlineDelivery.css";

export const OnlineDelivery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/restaurants")
      .then(({ data }) => setData(data));
  };

  return (
    <>
      <div id="dataContainer">
        {data.map((el) => (
          <div id="datacard" key={el.id}>
            <div id="imgDiv">
              <img width="100%" height="100%" src={el.img} />
            </div>
            <div id="name-rating">
              <h3>{el.name}</h3>
              <div id="rating">{Math.floor(Math.random() * 5) + 1}</div>
            </div>
            <div id="cat-cost">
              <p id="cat">{el.category}</p>

              <p>{el.averagecost}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
