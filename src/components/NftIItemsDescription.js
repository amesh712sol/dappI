import React from "react";
import styled from "styled-components";
import * as s from "styles/globalStyles";
import { HeaderImg, RdImg } from "App";

export const NFTItems = styled.div`
  width: 100%;
  display: flex;
  padding: 0 10vw;
  flex-direction: column;
  ${"" /* grid-template-columns: auto; */}
  @media (min-width: 767px) {
    ${"" /* grid-template-columns: ; */}
    flex-direction:row;
    gap: 10rem;
  }
`;

const NFTItem = styled.div`
  order: ${(props) => props.order};
  @media (min-width: 767px) {
    order: 1;
  }
`;

export const SmallImg = styled.img`
  ${"" /* height: "50%"; */}
  width: 30vw;
  @media screen and (max-device-width: 480px) and (orientation: portrait){
  display: flex;
  width: 75vw;
  margin-top: 10vh;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape){
  display: flex;
  width: 60vw;
  margin-top: 10vh;
  }
  &:hover {
    transform: rotate(0deg) scale(1.06);
  }
  transition: all 0.3s;
`;


  

export const LsmallImg = styled.img`
  ${"" /* height: "50%"; */}
  width: 30vw;
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    display: flex;
    width: 75vw;
    margin-top: 10vh;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    display: flex;
    width: 60vw;
    margin-top: 10vh;
    }
    &:hover {
      transform: rotate(0deg) scale(1.06);
    }
  transition: all 0.3s;
`;


export const RmImg = styled.img`
  ${"" /* height: "50%"; */}
  width: 30vw;
  @media screen and (max-device-width: 480px) and (orientation: portrait){
    display: flex;
    width: 75vw;
    margin-top: 10vh;
    }
    @media screen and (max-device-width: 860px) and (orientation: landscape){
    display: flex;
    width: 60vw;
    margin-top: 10vh;
    }
    &:hover {
      transform: rotate(0deg) scale(1.02);
    }
  transition: all 0.3s;
`;

function NftIItemsDescription(props) {
  return (
    <>
      <NFTItems>
        <NFTItem order={1}>
          <div style={{ marginTop: "4vh", width: "100%" }}>
          <s.HeadPara style={{ justifyContent: "flex-start", fontFamily: "marvin",}}
          className="wow bounceIn"
          data-wow-offset="100"
          >
            {"Welcome to Hellionz"}
          </s.HeadPara>
            <s.TextPara
              style={{
                marginTop: "5vh",
              }}
              className="wow bounceIn"
              data-wow-offset="100"
            >
              {
                "The day was August 30th, 2021. The Devil had just made a killing from the sale of his Bored Ape. All that money went straight to his head, and he started to feel like Hell just wasn't enough anymore. He ordered a new lair to be built inside Mt.Hellena, the most evil of mountains. Construction was slow, and so a new workforce was cloned from his closest followers..they are the Hellionz. Today the base is 66% complete, and with less work to go around some Hellionz are out of a job. This is an opportunity."
              }
            </s.TextPara>
          </div>
        </NFTItem>
        <NFTItem order={2} style={{ display: "flex", justifyContent: "center" }}>
          <LsmallImg
            src={"/config/images/Story.png"}
            style={{
              marginTop: "14vh",
            }}
          ></LsmallImg>
        </NFTItem>
      </NFTItems>
      <s.SpacerLarge></s.SpacerLarge>
      <div style={{ display: "flex", marginTop: "4vh", width: "100%", justifyContent: "center", }}>
      <s.NFTDivider></s.NFTDivider>
      </div>
      <NFTItems style={{ marginTop: "1rem" }}>
        {/* <s.Container
          flex={1}
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
          }}
        > */}
        <NFTItem order={2} style={{ display: "flex", justifyContent: "center" }}>
          <SmallImg
            src={"/config/images/friskGif.gif"}
            style={{ marginTop: "6vh", }}
          ></SmallImg>
        </NFTItem>
        {/* </s.Container> */}
        <NFTItem order={1}>
          <div style={{ marginTop: "6vh", width: "100%" }}>
          <s.HeadPara style={{ justifyContent: "flex-start", fontFamily: "marvin",}}
          className="wow bounceIn"
          data-wow-offset="100"
          >
            {"What are Hellionz?"}
          </s.HeadPara>
            <s.TextPara
              style={{
                marginTop: "5vh",
              }}
              className="wow bounceIn"
              data-wow-offset="100"
            >
              {
                "Hellionz is a dynamic P2E ecosystem and community summoned to the Polygon Network. Stake your Hellionz NFTs to yield precious $HellBux. Spend your $HellBux to mint future drops, raffle tickets for prizes, Hellionz merch, and more. Each character has unique abilities when staked, and strategy will be needed to get the most out of your Hellionz."
              }
            </s.TextPara>
          </div>
        </NFTItem>
      </NFTItems>
      <s.SpacerLarge></s.SpacerLarge>
      <div style={{ display: "flex", marginTop: "4vh", width: "100%", justifyContent: "center", }}>
      <s.NFTDivider></s.NFTDivider>
      </div>
      <NFTItems>
        <NFTItem order={1}>
          <div style={{ marginTop: "10vh", width: "100%"}}>
          <s.BigHeadPara style={{justifyContent: "center", fontFamily: "marvin",}}
          className="wow bounceIn"
          data-wow-offset="100"
          >
            {"ROADMAP V1.0"}
          </s.BigHeadPara>
            <s.TextPara
              style={{
                marginTop: "5vh",
              }}
              className="wow bounceIn"
              data-wow-offset="100"
            >
              {
                "We do more than just spit tokens. Every Hellionz collection we drop, or feature we introduce will either 1. Give members a new way to spend $HellBux 2. Bring in creative ways to stake and yield Bux, which adds a new layer of strategy and risk to the game. Currently, the Devil is leading all Hellionz towards the launch of our Genesis collection in late Q1. After that, our community will take control and vote on our next direction. Below is a *brief* list of everything on roadmap 1.0. Check out the roadmap articles releasing SOON, it's where we really get into detail. When 1.0 is 80% complete we'll start developing v2.0. Our team is in this for the long haul and we're going to prove it as we drop feature after feature. On. Time."
              }
            </s.TextPara>
          </div>
        </NFTItem>
        <NFTItem order={2} style={{display: "flex", justifyContent: "center"}}>
          <RmImg
            src={"/config/images/roadmap.png"}
            style={{
              marginTop: "14vh",
            }}
          ></RmImg>
        </NFTItem>
      </NFTItems>

      
    </>
  );
}

export default NftIItemsDescription;
