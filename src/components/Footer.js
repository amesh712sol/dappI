import React from "react";
import styled from "styled-components";
import * as s from "styles/globalStyles";

export const SymbolImg = styled.img`
width: 120px;
@media screen and (max-device-width: 480px) and (orientation: portrait){
  width: 70px;}
  @media screen and (max-device-width: 860px) and (orientation: landscape){
  width: 90px;}

`;
export const OSSocialButton = styled.button`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  background-color: var(--sbtnbg);
  background-image: url("/config/images/BtnOS.png");
  background-image: cover;
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-size: cover;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.4s;
  margin: 2vh;
  marginRight: 0.5vw;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    width: 27px;
    height: 27px;
    margin-left: 2vw;
    margin-right: 2vw;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    width: 35px;
    height: 35px;
    }
`;

export const DisSocialButton = styled.button`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  background-color: var(--sbtnbg);
  background-image: url("/config/images/BtnDis.png");
  background-image: cover;
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-size: cover;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.4s;
  margin: 2vh; 
  marginRight: 0.5vw;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    width: 27px;
    height: 27px;
    margin-left: 2vw;
    margin-right: 2vw;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape){
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    width: 35px;
    height: 35px;
  }
`;
export const TwitSocialButton = styled.button`
  width: 30px;
  height: 30px;
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
  background-color: var(--sbtnbg);
  background-image: url("/config/images/BtnTwit.png");
  background-image: cover;
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-size: cover;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.4s;
  margin: 2vh;
  marginRight: 0.5vw;
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    margin-left: 2vw;
    margin-right: 2vw;
    width: 27px;
    height: 27px;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape){
    margin-left: 1.5vw;
    margin-right: 1.5vw;
    width: 35px;
    height: 35px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  @media (min-width: 767px) {
    flex-direction: row;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    ${"" /* gap: 10%; */}
  }
`;

function Footer() {
  return (
    <div style={{width: "100%",}}>
      <FooterContent style={{
         paddingTop: "3rem",
         paddingBottom: "3rem",
        }}>,
    
      </FooterContent>
    </div>
  );
}

export default Footer;
