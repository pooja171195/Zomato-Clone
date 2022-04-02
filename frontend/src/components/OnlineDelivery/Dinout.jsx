import { useState, useEffect } from "react";
import axios from "axios";
import "./OnlineDelivery.css";
import First from "../common/CaraouselNew/FirstTest";
import Second from "../common/CaraouselNew/SecondTest";
import { Zfooter } from "../zfooter/zfooter";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";

export const Dinout = () => {
  const navigate = useNavigate();
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
    // <Navigate to="/orderonline"></Navigate>;
    navigate("/orderonline");
  };

  return (
    <>
      {/* <First />
      <Second /> */}
      <h1 style={{ textAlign: "center" }}>Dine-Out Restaurants in Bengaluru</h1>
      <div id="dataContainer">
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
      <Zfooter />
    </>
  );
};
