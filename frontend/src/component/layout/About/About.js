import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ImgSrc from "../../../images/My_Ecommerce.png";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/fateh_bdf/";
  };
  const visitFcabook = () => {
    window.location = "https://www.facebook.com/profile.php?id=100015783588265";
  };
  const visitLinkedIn = () => {
    window.location = "https://www.linkedin.com/in/beddiaf-fateh-85a060159/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div className="info">
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={ImgSrc}
              alt="Founder"
            />
            <Typography>Beddiaf Fateh</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <Button onClick={visitFcabook} color="primary">
              Visit Facebook
            </Button>
            <Button onClick={visitLinkedIn} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by me. Only with the purpose to
              learn MERN Stack and applay full authentication.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Links</Typography>

            <a href="https://www.instagram.com/fateh_bdf/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100015783588265"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/beddiaf-fateh-85a060159/"
              target="blank"
            >
              <LinkedInIcon className="linkedInSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
