import React from "react";
import HomeHeader from "./Header/HomeHeader";
import MenuCategory from "./MenuCategory/MenuCategory";
import Resturants from "./NearbyResturants/Resturants";
import Layout from "../Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <HomeHeader />
      <MenuCategory />
      <Resturants />
    </Layout>
  );
};

export default Home;
