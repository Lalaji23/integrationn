import "./Right.css";
import React from "react";

type propchecker = {
  image: string;
  Itemname: string;
  brandname: string;
  seller: string;
};

export default function Right(props: propchecker) {
  return (
    <div className="gap">
      <img alt="" id="home-img" src={props.image}></img>
      <h1>{props.Itemname}</h1>
      <h1>{props.brandname}</h1>
      <h1>{props.seller}</h1>
    </div>
  );
}
