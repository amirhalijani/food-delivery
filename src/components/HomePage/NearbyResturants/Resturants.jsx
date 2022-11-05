import React from "react";
import ResturantCard from "./ResturantCard";
import Banner1 from "../../../assets/banner1.png";
import Banner2 from "../../../assets/banner2.png";
import Banner3 from "../../../assets/banner3.png";
import Pizza from "../../../assets/emoji/Pizza.png";
import Burger from "../../../assets/emoji/Burger.png";
import BBQ from "../../../assets/emoji/Meat.png";
import Sushi from "../../../assets/emoji/Sushi.png";
import Vegan from "../../../assets/emoji/broccoli.png";
import Desert from "../../../assets/emoji/cake.png";

const Resturants = () => {
  return (
    <div className="mt-10">
      <div className="mb-4">
        <h2 className="text-xl text-[#2B2B43] font-semibold">Nearby resturants</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        <ResturantCard banner={Banner1} name="Royal Sushi House" mintime="30" maxtime="40" price="32" categoryname="Sushi" categoryicon={Sushi} featured="true" />
        <ResturantCard banner={Banner2} name="Burger & Pizza" mintime="40" maxtime="60" price="24" categoryname="Burger" categoryicon={Burger} />
        <ResturantCard banner={Banner3} name="Ninja Sushi" mintime="20" maxtime="40" price="40" categoryname="Sushi" categoryicon={Sushi} />
        <ResturantCard banner={Banner2} name="Burger & Pizza" mintime="40" maxtime="60" price="24" categoryname="Burger" categoryicon={Burger} />
        <ResturantCard banner={Banner3} name="Ninja Sushi" mintime="20" maxtime="40" price="40" categoryname="Sushi" categoryicon={Sushi} />
        <ResturantCard banner={Banner1} name="Royal Sushi House" mintime="30" maxtime="40" price="32" categoryname="Sushi" categoryicon={Sushi} featured="true" />
      </div>
    </div>
  );
};

export default Resturants;
