import React from "react";
import Pizza from "../../assets/Pizza.jpg";

const LoginSidebar = () => {
  return (
    <div className="w-3/4 bg-[#697BFF] flex flex-col items-center justify-evenly max-[600px]:hidden">
      <img src={Pizza} className="w-3/5 rounded-[32px]" />
      <div className="w-3/4 flex flex-col items-center justify-evenly">
        <h2 className="text-white text-3xl font-semibold">
          Leave review for all meals
        </h2>
        <h3 className="text-white text-center mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          accusamus earum optio voluptas nam? Provident magnam neque ipsa labore
          ad.
        </h3>
      </div>
    </div>
  );
};

export default LoginSidebar;
