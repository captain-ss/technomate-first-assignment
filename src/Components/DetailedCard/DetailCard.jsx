import React from "react";
import "./DetailCard.css";
import { useState } from "react";
import Shoes from "../../images/Shoes.jpg";

const DetailCard = ({ Data }) => {
  return (
    <div
      className="OurMenu-PopUp-Main-Container
        "
    >
      <div className="OurMenu-PopUp-box">
        <div className="OurMenu-PopUp-box-cross-box"></div>
        <div className="OurMenu-PopUp-box-div1"></div>
        <div className="OurMenu-PopUp-box-div2">{Data.name}</div>
        <div className="OurMenu-PopUp-box-div3">{Data.description}</div>
        {/* <div className="info-boxes-Deatiled-card">
          <div className="info-box-Deatiled-card">
            <div>price</div>
            <div>${Data.price}</div>
          </div>
          <div className="info-box-Deatiled-card">
            <div>Brand</div>
            <div>{Data.brand}</div>
          </div>
          <div className="info-box-Deatiled-card">
            <div>price</div>
            <div>${Data.size}</div>
          </div>
          <div className="info-box-Deatiled-card">
            <div>price</div>
            <div>${Data.price}</div>
          </div>
          <div className="info-box-Deatiled-card">
            <div>price</div>
            <div>${Data.price}</div>
          </div>
        </div> */}
          <div className="detailedCard-info">Price : ${Data.price}</div>
        <div
          className="detailedCard-info"
          style={{
            display: "flex",
          }}
        >
          Size :{" "}
          {Array.isArray(Data.size)?
          Data.size.map((item, idx) => {
            return <div>{item},</div>;
          }):Data.size}
        </div>
        <div className="detailedCard-info">Brand :  {Data.brand}</div>
        <div className="detailedCard-info">Price : ${Data.price}</div>

        <div className="OurMenu-PopUp-box-div6">
          <div className="OurMenu-PopUp-box-div6-part1">
            <div
              className="MyCart-Item-Component-div2-text3"
              style={{ marginLeft: "2vw" }}
            >
              <span>469</span>
              <button
                className="MyCart-Item-Component-div2-text3-button"
                style={{ marginLeft: "5vw" }}
              >
                <div style={{ cursor: "pointer" }}>-</div>
                <span>1</span>
                <div1 style={{ cursor: "pointer" }}>+</div1>
              </button>
            </div>
          </div>
          <div className="OurMenu-PopUp-box-div6-part2">
            <img src={Shoes} alt="" />
            add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
