import React, { useState, useEffect } from "react";
import Items from "../../components/Items/Items";
import Carousel from "../../components/Carousel/Carousel";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import "./Main.scss";

const Main = () => {
  return (
    <main className="mainContainer">
      <Carousel />
      <div className="itemContainer">
        <ItemContainer title="요즘 잘 나가요" />
        <ItemContainer title="새로 나왔어요" />
        <ItemContainer title="내가 제일 잘나가" />
      </div>
    </main>
  );
};

export default Main;
