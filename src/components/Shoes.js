import React from "react";
import { useDispatch } from "react-redux";
import { addShoes } from "../action";

export default function Shoes({ shoes, goHome }) {
  const dispatch = useDispatch();
  return (
    <div>
      {shoes.map((value) => {
        return (
          <div key={value.id}>
            <div>{value.product}</div>
            <div>{value.price}</div>
            <button
              onClick={() => {
                dispatch(addShoes(value));
              }}
            >
              구매
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          goHome();
        }}
      >
        홈으로
      </button>
    </div>
  );
}
