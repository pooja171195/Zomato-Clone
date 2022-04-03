import React from "react";
import Navbar from "../../components/Navbar/index";
import "./landing.css";
import MobilePage from "../../components/MobilePage/MobilePage";
import { Zfooter } from "../../components/zfooter/zfooter";
import { useNavigate } from "react-router-dom";
import { Exploth } from "../../components/homep-comp/exploth";


export const Landing = () => {
const navigate = useNavigate()
  const handleLocation= ()=>{
    navigate("/OnlinePage")

  }
  const navigate2 = useNavigate()
  const handleLocation2= ()=>{
    navigate2("/OnlinePage")

  }
  const navigate3 = useNavigate()
  const handleLocation3= ()=>{
    navigate3("/OnlinePage")

  }
  const navigate4 = useNavigate()
  const handleLocation4= ()=>{
    navigate4("/OnlinePage")

  }

  return (
    <>
      <Navbar />
      <div className=".poD1">
        <div className="poojaD">
          <div class="containerP" onClick={()=>{
            handleLocation()
          }}>
            <img
              className="icon1"
              src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?fit=around|402:360&crop=402:360;*,*"
              alt=""
            />
            <div class="tag">Order Online</div>
          </div>
          <div class="containerP" onClick={()=>{
            handleLocation2()
          }}>
            <img
              className="icon1"
              src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?fit=around|402:360&crop=402:360;*,*"
              alt=""
            />
            <div class="tag">Dining Out</div>
          </div>
          <div class="containerP" onClick={()=>{
            handleLocation3()
          }}>
            <img
              className="icon1"
              src="https://b.zmtcdn.com/webFrontend/7c5da5fa471e5e5f26745709f60498a71647365004.jpeg?fit=around|402:360&crop=402:360;*,*"
              alt=""
            />
            <div class="tag">Pro and Pro Plus</div>
          </div>
          <div class="containerP" onClick={()=>{
            handleLocation4()
          }}>
            <img
              className="icon1"
              src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?fit=around|402:360&crop=402:360;*,*"
              alt=""
            />
            <div class="tag">Nightlife and Clubs</div>
          </div>
        </div>
        <div className="poD2">
          <span>Collections</span>
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Allahabad, based on trends
          </p>
          <div>All collections in Allahabad</div>
        </div>
        <div className="mi">
          <div className="mi-container">
            <img
              className="icon11"
              src="https://b.zmtcdn.com/data/collections/ca1c3eba724a6465d83d09953af0768d_1648214147.png?output-format=webp"
              alt=""
            />
            <div class="mi-t">Live Cricket Screening</div>
            <div class="mi-tt">61 Places</div>
          </div>
          <div className="mi-container">
            <img
              className="icon11"
              src="https://b.zmtcdn.com/data/collections/031c2dd47d839ff2bf98dbb66147ab4f_1648708613.jpg?output-format=webp"
              alt=""
            />
            <div class="mi-t">Newly Opened</div>
            <div class="mi-tt">26 Places</div>
          </div>
          <div className="mi-container">
            <img
              className="icon11"
              src="https://b.zmtcdn.com/data/collections/f60eb469dbcdadaaa48c8be4f5ba48b3_1646040101.png?output-format=webp"
              alt=""
            />
            <div class="mi-t">Trending This Week</div>
            <div class="mi-tt">30 Places</div>
          </div>
          <div className="mi-container">
            <img
              className="icon11"
              src="https://b.zmtcdn.com/data/collections/dc55234ebcab4867fa2eb65730c4a695_1646987030.jpg?output-format=webp"
              alt=""
            />

            <div class="mi-t">Best of Delhi NCR</div>
            <div class="mi-tt">154 Places</div>
          </div>
        </div>
        <div className="pLocation">
          <div className="BSS">Popular localities in and around Allahabad</div>
        </div>
        <div className="Lol">
          <div className="LolD">
            {" "}
            <p> Civil Lines (340 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Tagore Town (41 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Ashok Nagar (31 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Katra (128 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Colonel Ganj (26 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Leader Road (46 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Naini (207 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p>Lukerganj (41 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p>Meergunj (32 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p>Bairahana (36 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p> Teliarganj (95 places)</p>
          </div>
          <div className="LolD">
            {" "}
            <p>Rambagh (69 places)</p>
          </div>
        </div >
       
        <div className="PMob">
         
          <MobilePage/>
       
        
        </div>
        <div className="KM">
<Exploth/>
        </div>
        <div className="Ku">
<Zfooter/>
        </div>
      </div>
    </>
  );
};
