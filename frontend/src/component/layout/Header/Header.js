import React from "react";
import { ReactNavbar } from "overlay-navbar";
// import logo from "../../images/SE-removebg-preview.png";
import logo1 from "../../../images/SAHOUANE_ENGINE-removebg-preview.png";

const Header = () => {
  return (
    <ReactNavbar
      burgerColor="#ffbf00"
      burgerColorHover="#ffeb3b"
      logo={logo1}
      logoWidth="20vmax"
      navColor1="rgb(57 62 70 / 89%)"
      logoHoverSize="10px"
      logoHoverColor="#FAD02C"
      link1Text="Home"
      link2Text="Products"
      link3Text="Contact"
      link4Text="About"
      link1Url="/"
      link2Url="/products"
      link3Url="/contact"
      link4Url="/about"
      link1Size="1.3vmax"
      link1Color="rgba(255, 255, 255,0.8)"
      nav1justifyContent="flex-end"
      nav2justifyContent="flex-end"
      nav3justifyContent="flex-start"
      nav4justifyContent="flex-start"
      link1ColorHover="#FAD02C"
      link1Margin="1vmax"
      profileIconUrl="/login"
      profileIconColor="rgba(255, 255, 255,0.8)"
      searchIconColor="rgba(255, 255, 255,0.8)"
      cartIconColor="rgba(255, 255, 255,0.8)"
      profileIconColorHover="#FAD02C"
      searchIconColorHover="#FAD02C"
      cartIconColorHover="#FAD02C"
      cartIconMargin="1vmax"
    />
  );
};

export default Header;
