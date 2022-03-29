import React from "react";
import Slider from "react-slick";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import "./topBrands.css";

const topBrandsList = [
  {
    id: 1,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp",
  },
  {
    id: 2,
    time: "29 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp",
  },
  {
    id: 3,
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png?output-format=webp",
  },
  {
    id: 4,
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png?output-format=webp",
  },
  {
    id: 6,
    time: "38 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp",
  },
  {
    id: 7,
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp",
  },
  {
    id: 8,
    time: "30 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433322.png?output-format=webp",
  },
  {
    id: 9,
    time: "40 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/e12f7587d0a5f589af54c88352ff8bf3_1628325081.png?output-format=webp",
  },
  {
    id: 10,
    time: "35 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9fd44dce68f59d5a4f63e7c426c4c282_1605106153.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => (
          <div>
            <div className="top-brands-cover">
              <img
                className="top-brands-image"
                src={brand.cover}
                alt={brand.time}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
