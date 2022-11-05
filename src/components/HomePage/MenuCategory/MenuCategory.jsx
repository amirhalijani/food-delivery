import React from "react";
import CategoryItem from "./CategoryItem";
import Pizza from "../../../assets/emoji/Pizza.png";
import Burger from "../../../assets/emoji/Burger.png";
import BBQ from "../../../assets/emoji/Meat.png";
import Sushi from "../../../assets/emoji/Sushi.png";
import Vegan from "../../../assets/emoji/broccoli.png";
import Desert from "../../../assets/emoji/cake.png";

const MenuCategory = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 items-center mt-8">
      <CategoryItem title="Pizza" icon={Pizza} />
      <CategoryItem title="Burger" icon={Burger} />
      <CategoryItem title="BBQ" icon={BBQ} />
      <CategoryItem title="Sushi" icon={Sushi} />
      <CategoryItem title="Vegan" icon={Vegan} />
      <CategoryItem title="Deserts" icon={Desert} />
    </div>
  );
};

export default MenuCategory;
