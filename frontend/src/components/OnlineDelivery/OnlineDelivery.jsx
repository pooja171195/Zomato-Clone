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

  const handleChange = (e) => {
    console.log(e);
    localStorage.setItem("OrderItem", JSON.stringify(e));
  };

  return (
    <>
      <div id="dataContainer">
        <h1>Order food online in Chetana Colony, Vidya Nagar, Hubli</h1>
        {data.map((el) => (
          <div
            onClick={() => {
              handleChange(el);
            }}
            id="datacard"
            key={el.id}
          >
            <div id="imgDiv">
              <img width="100%" height="100%" src={el.img} />
            </div>
            <div id="name-rating">
              <h4>{el.name}</h4>
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
