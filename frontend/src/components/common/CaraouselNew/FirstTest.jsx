import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 5 },
  { width: 1200, itemsToShow: 4 },
];
export default function First() {
  return (
    <>
      <div className="CarouselContainer">
        <h1 style={{ marginLeft: "7%" }}>Inspiration for your first order</h1>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item
              style={{
                border: "1px solid red",
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/o2_assets/e16e6b3694e98a70033084436d0e69941632716696.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/dish_images/d8155f932d5fc2499e2db399a01eb3751634966898.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/dish_images/743abc4d4dad9c3f8163084ae4b30bad1635165809.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png"
              />
            </Item>
            <Item
              style={{
                borderRadius: "50%",
                width: "150px",
                height: "150px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
              />
            </Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
