import React from "react";
import ShoesPresent from "../components/Shoes";
import ShoesData from "../clothesData.json";
import { useState } from "react";
import { useEffect } from "react";

export default function Shoes({ history, match }) {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(
      ShoesData.brands.find((value) => value.name === match.params.brand)
        .clothes
    );
  });
  const goHome = () => {
    history.push("/");
  };
  return <ShoesPresent shoes={shoes} goHome={goHome}></ShoesPresent>;
}
