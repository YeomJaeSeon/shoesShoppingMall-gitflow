import React from "react";
import { useDispatch } from "react-redux";
import { deleteShoes } from "../action";
import { deleteAll } from "../action";

export default function Bucket({ selectedShoes, total }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>장바구니</h2>
      <div>total :{total}</div>
      <button
        onClick={() => {
          dispatch(deleteAll());
        }}
      >
        전부 삭제
      </button>
      {selectedShoes.map((value) => {
        return (
          <div key={value.id}>
            {value.product !== undefined && (
              <div>
                <div>{value.product}</div>
                <div>{value.price}</div>
                <button
                  onClick={() => {
                    dispatch(deleteShoes(value));
                  }}
                >
                  제거
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
