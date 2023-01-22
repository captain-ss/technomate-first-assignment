
import React from 'react'
import "./DetailCard.css"
import { useState } from 'react';
import Shoes  from "../../images/Shoes.jpg"




const DetailCard = ({Data}) => {
    
  
  return (
    <div
          className="OurMenu-PopUp-Main-Container
        "
        >
        <div
className="OurMenu-PopUp-box"
>
<div className="OurMenu-PopUp-box-cross-box">
  <div>
    <img src={Shoes} alt="" />
  </div>
</div>
<div className="OurMenu-PopUp-box-div1">
  
</div>
<div className="OurMenu-PopUp-box-div2">
  {Data.name}
</div>
<div className="OurMenu-PopUp-box-div3">
 {Data.description}
</div>
<div className="OurMenu-PopUp-box-div4">Make it a Meal</div>
<div className="OurMenu-PopUp-box-div5">
  <div className="OurMenu-PopUp-box-div5-part1">
    <img src={Shoes} alt="" />
  </div>
  <div className="OurMenu-PopUp-box-div5-part2">
    Medium Fries + Chocolate Thick Shake
  </div>
  <div className="OurMenu-PopUp-box-div5-part3">
    <img src={Shoes} alt="" />
    185
  </div>
  <div className="OurMenu-PopUp-box-div5-part4">
    <input
      type="radio"
      name="ItemSize"
      style={{ width: "1.2vw" }}
    />
  </div>
</div>
<div className="OurMenu-PopUp-box-div5">
  <div className="OurMenu-PopUp-box-div5-part1">
    <img src={Shoes} alt="" />
  </div>
  <div className="OurMenu-PopUp-box-div5-part2">
    Medium Fries + Chocolate Thick Shake
  </div>
  <div className="OurMenu-PopUp-box-div5-part3">
    <img src={Shoes} alt="" />
    185
  </div>
  <div className="OurMenu-PopUp-box-div5-part4">
    <input
      type="radio"
      name="ItemSize"
      style={{ width: "1.2vw" }}
    />
  </div>
</div>
<div className="OurMenu-PopUp-box-div5">
  <div className="OurMenu-PopUp-box-div5-part1">
    <img src={Shoes} alt="" />
  </div>
  <div className="OurMenu-PopUp-box-div5-part2">
    Medium Fries + Chocolate Thick Shake
  </div>
  <div className="OurMenu-PopUp-box-div5-part3">
    <img src={Shoes} alt="" />
    185
  </div>
  <div className="OurMenu-PopUp-box-div5-part4">
    <input
      type="radio"
      name="ItemSize"
      style={{ width: "1.2vw" }}
    />
  </div>
</div>
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
  )
}

export default DetailCard
