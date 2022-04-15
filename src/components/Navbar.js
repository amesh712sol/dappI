import {
  BtnsImg,
  StkBtnImg,
  MintBtnImg,
  LogoImg,
  Button,
  StyledButton,
  StyledRoundButton,
} from "App";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import styled from "styled-components";
import * as s from "styles/globalStyles";
import "reactjs-popup/dist/index.css";
import {
  DisSocialButton,
  OSSocialButton,
  SymbolImg,
  TwitSocialButton,
} from "./Footer";
import MobileMenu from "./MobileMenu";
import Popup from "reactjs-popup";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { Dialog } from "@headlessui/react";
import { GrFormClose } from "react-icons/gr";
import { useDispatch } from "react-redux";

const NavbarContainer = styled.div`
  width: 100%;
  padding: 0 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;
const MobileMenuToggle = styled.div`
  font-size: 3rem;
  color: white;
  cursor: pointer;
  display: none;
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    margin-left: 6px;
    margin-top: 9px;
    display: block;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape) {
    display: block;
    margin-top: 5px;
    margin-left: 20px;
  }
`;

// className="fixed inset-0 z-10 overflow-y-auto"
export const PopupDialog = styled(Dialog)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupDialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopupDialogDescription = styled(Dialog.Description)``;
// className="min-h-screen px-4 text-center"
export const PopupDialogBody = styled.div`
  height: 50%;
  width: 80%;
  @media screen and (min-width: 480px) {
    height: 60%;
    width: 60%;
  }
  @media screen and (min-width: 860px) {
    height: 40%;
    width: 40%;
  }
  border-radius: 1rem;
  border: 5px solid #000;
  margin: auto;
  text-align: center;
  background: #1a202c;
  z-index: 20;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PopupDialogCloseButton = styled.div`
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #f26c4f;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

export const PopupDialogTitle = styled(Dialog.Title)`
  color: #fff;
  font-size: 1.5rem;
  @media screen and (min-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 860px) {
    font-size: 3rem;
  }
`;

function Navbar({
  blockchain,
  feedback,
  decrementMintAmount,
  mintAmount,
  incrementMintAmount,
  claimingNft,
  CONFIG,
  getData,
  claimNFTs,
  ...props
}) {
  const dispatch = useDispatch();
  const [navOpen, setNavOpen] = React.useState(false);
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavbarContainer>
       <s.Container flex={1} style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <s.PopupPanel onClick={() => setIsOpen(!isOpen)}>
          <MintBtnImg
            src={"/config/images/mint.png"}
            style={{
              maxHeight: "12vh",
              width: "120px",
              padding: "0 0.5rem",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          ></MintBtnImg>
        </s.PopupPanel> 
        
         <PopupDialog open={isOpen} onClose={() => setIsOpen(false)}>
          <PopupDialogOverlay />
          <PopupDialogBody>
            <PopupDialogCloseButton onClick={() => setIsOpen(false)}>
              <GrFormClose />
            </PopupDialogCloseButton>
            <PopupDialogTitle>0/4545</PopupDialogTitle>

            {blockchain.account === "" || blockchain.smartContract === null ? (
              <s.Container ai={"center"} jc={"center"}>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--accent-text)",
                  }}
                >
                  Connect to the {CONFIG.NETWORK.NAME} network
                </s.TextDescription>
                <s.SpacerSmall />
                <StyledButton
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}
                >
                   CONNECT 
                   <s.TextTitle
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      fontFamily: "marvin",
                    }}
                  >
                    MINT
                  </s.TextTitle>
                </StyledButton>
                {blockchain.errorMsg !== "" ? (
                  <>
                    <s.SpacerSmall />
                    <s.TextDescription
                      style={{
                        textAlign: "center",
                        color: "var(--accent-text)",
                      }}
                    >
                      {blockchain.errorMsg}
                    </s.TextDescription>
                  </>
                ) : null}
              </s.Container>
            ) : (
              <>
                <s.TextDescription
                  style={{
                    textAlign: "center",
                    color: "var(--accent-text)",
                  }}
                >
                  {feedback}
                </s.TextDescription>
                <s.SpacerMedium />
                <s.Container ai={"center"} jc={"center"} fd={"row"}>
                  <StyledRoundButton
                    style={{ lineHeight: 0.4 }}
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      decrementMintAmount();
                    }}
                  >
                    -
                  </StyledRoundButton>
                  <s.SpacerMedium />
                  <s.TextDescription
                    style={{
                      textAlign: "center",
                      color: "var(--accent-text)",
                    }}
                  >
                    {mintAmount}
                  </s.TextDescription>
                  <s.SpacerMedium />
                  <StyledRoundButton
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      incrementMintAmount();
                    }}
                  >
                    +
                  </StyledRoundButton>
                </s.Container>
                <s.SpacerSmall />
                <s.Container ai={"center"} jc={"center"} fd={"row"}>
                  <StyledButton
                    disabled={claimingNft ? 1 : 0}
                    onClick={(e) => {
                      e.preventDefault();
                      claimNFTs();
                      getData();
                    }}
                  >
                    {claimingNft ? "BUSY" : "BUY"}
                  </StyledButton>
                </s.Container>
              </>
            )}
          </PopupDialogBody>
        </PopupDialog>

       
        <a href="https://d14fsdfsfs.com">
          <StkBtnImg
            src={"/config/images/hustlegame.png"}
            style={{
              maxHeight: "12vh",
              width: "181px",
              padding: "0 0.5rem",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          ></StkBtnImg>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="https://opensea.io/collection/hellionz-underworld-pass" target="_blank">
          <OSSocialButton style={{}}></OSSocialButton>
        </a>
        <a href="https://dsc.gg/hb-hellionz" target="_blank">
          <DisSocialButton style={{}}></DisSocialButton>
        </a>
        <a href="https://twitter.com/hellionznft" target="_blank">
          <TwitSocialButton style={{}}></TwitSocialButton>
        </a>
      </div>
      <MobileMenuToggle onClick={() => setNavOpen(!navOpen)}>
        <BiMenuAltRight />
      </MobileMenuToggle>
       </s.Container> 
      {navOpen ? <MobileMenu /> : null}
    </NavbarContainer>
  );
}

export default Navbar;
