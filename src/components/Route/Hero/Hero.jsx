import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Banner from "../../../Assests/banner.jpg";

const Hero = () => {
  return (
    <div
      className={` relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${Banner})`,
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Collection for <br /> home Decoration
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[600] text-[#000000ba]">
          In the beginning, e-commerce was really about getting commodity
          products online as cheaply as possible. Now, we’re moving into the
          more exciting phase of e-commerce, where it’s about emotional products
          – the things people really cherish.
        </p>
        <Link to="/products" className="inline-block">
          <div
            style={{
              border: "none",
              padding: "1rem",
              borderRadius: "1rem",
              background: "red",
              outline: "none",
            }}
          >
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
