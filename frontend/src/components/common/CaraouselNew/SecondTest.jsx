import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 6 },
  { width: 1200, itemsToShow: 4 },
];
export default function Second() {
  return (
    <>
      <div className="CarouselContainer">
        <h1 style={{ marginLeft: "7%" }}>Top brands for you</h1>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/28650b1e4109f8a6ad34c5fc5cb5b2a7_1602854588.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/7fdbbe0f4f0aff0bb3775f3ac819ecb0_1638424082.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/396a89cdb1f7a999717b01aa98da7017_1631990846.png?output-format=webp"
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
                src="https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png?output-format=webp"
              />
            </Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}
