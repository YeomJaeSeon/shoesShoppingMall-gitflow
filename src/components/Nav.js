import React from "react";
import { Link, Route } from "react-router-dom";
import Shoes from "../containers/Shoes";

export default function Nav() {
  return (
    <>
      <ul>
        <li>
          <Link to="/nike">nike</Link>
        </li>
        <li>
          <Link to="/adidas">adidas</Link>
        </li>
        <li>
          <Link to="/newbalance">newbalance</Link>
        </li>
        <li>
          <Link to="/fuma">fuma</Link>
        </li>
        <li>
          <Link to="/bose">보세</Link>
        </li>
      </ul>
      <Route path="/:brand" component={Shoes}></Route>
    </>
  );
}
