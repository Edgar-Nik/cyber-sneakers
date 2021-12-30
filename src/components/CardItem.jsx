import React from "react";

export default function CardItem({ imgSrc, desc }) {
  return (
    <div className="card-item">
      <div className="top">
        <img src={imgSrc} alt="sneakers" />
      </div>
      <div className="bottom">
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
}
