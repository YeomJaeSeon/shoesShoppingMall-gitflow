import React from "react";
import BucketPresent from "../components/Bucket";
import { useSelector } from "react-redux";

export default function Bucket() {
  const selectedShoes = useSelector((state) => state);
  const total = useSelector((state) => state[0].sum);
  return (
    <BucketPresent selectedShoes={selectedShoes} total={total}></BucketPresent>
  );
}
