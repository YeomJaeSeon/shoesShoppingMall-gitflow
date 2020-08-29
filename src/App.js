import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Bucket from "./containers/Bucket";

export default function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Bucket></Bucket>
    </div>
  );
}
