import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import WOW from "wowjs";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "styles/globalStyles";
import styled from "styled-components";
import FAQs from "components/FAQs";
import NftIItemsDescription, {
  LsmallImg,
  NFTItems,
  NftIItem,
} from "components/NftIItemsDescription";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import "./styles/pop.css";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  color: var(--secondary-text);
  width: 100px;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--secondary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px dashed var(--secondary);
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`;

export const FullImg = styled.img`
  width: 100vw;
  max-width: 100vw;
  max-height: 100vh;
`;

export const LogoImg = styled.img`
  width: 80%;
  ${"" /* max-width: 100vw; */}
  ${"" /* height: 10vh; */}
  display: none;
  @media (min-width: 1268px) {
    display: block;
    width: 175px;
  }
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    margin-left: 30px;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape) {
    width: 45%;
    margin-left: 150px;
    ${"" /* max-width: 100vw; */}
    ${"" /* height: 10vh; */}
  }
`;

export const SocialImg = styled.img`
  maxwidth: 100%;
  maxheight: 100%;
`;

export const FaqImg = styled.img`
  max-width: 100vw;
  max-height: 80vh;
  width: 30vw;
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    width: 60vw;
  }
  @media screen and (max-device-width: 860px) and (orientation: landscape) {
    width: 40vw;
  }
`;

export const HookImg = styled.img`
  display: block;
  height: 200vh;
  width: 100%;
  max-height: 100%;
  max-width: 100%;
  padding-top: 5vh;
  padding-bottom: 5vh;
  padding-left: 6vw;
  padding-right: 6vw;

  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    height: 65vh;
    width: 95vw;
  }

  @media screen and (max-device-width: 860px) and (orientation: landscape) {
    height: 160vh;
    width: 95vw;
  }
`;

export const MintBtnImg = styled.img`
  max-width: 50vw;
  max-height: 50vh;
  display: block;
  @media (min-width: 1268px) {
    display: block;
    max-width: 50vw;
    max-height: 50vh;
    //   display: block;
  }
`;

export const StkBtnImg = styled.img`
  max-width: 50vw;
  max-height: 50vh;
  display: none;
  @media (min-width: 1268px) {
    display: block;
    max-width: 50vw;
    max-height: 50vh;
    display: none;
  }
`;

export const BtnsImg = styled.img`
  max-width: 50vw;
  max-height: 50vh;
  display: none;
  @media (min-width: 1268px) {
    display: block;
    max-width: 50vw;
    max-height: 50vh;
  }
`;

export const HeaderImg = styled.img`
  max-width: 50vw;
  max-height: 50vh;
  @media (min-width: 1268px) {
    display: block;
    max-width: 50vw;
    max-height: 50vh;
  }
`;

export const RdImg = styled.img`
  max-width: 50vw;
  max-height: 50vh;
  @media (min-width: 1268px) {
    display: block;
    width: 100%;
    max-width: 50vw;
    max-height: 50vh;
  }
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(``);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1333,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(``);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(``);
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <s.Screen>
      <s.Container
        flex={1}
        style={{
          backgroundColor: "var(--bgnew)",
        }}
      >
        <s.SpacerLarge></s.SpacerLarge>
        <Navbar
          blockchain={blockchain}
          feedback={feedback}
          decrementMintAmount={decrementMintAmount}
          mintAmount={mintAmount}
          incrementMintAmount={incrementMintAmount}
          claimingNft={claimingNft}
          CONFIG={CONFIG}
          getData={getData}
          claimNFTs={claimNFTs}
        />
        <s.Container
          flex={1}
          style={{
            backgroundColor: "var(--bgnew)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <HookImg src={"/config/images/mthellena.png"} style={{}}></HookImg>
        </s.Container>

        <NftIItemsDescription />

        <s.Container
          flex={1}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <s.TextBox
            style={{
              display: "flex",
              width: "60vw",
              justifyContent: "flex-start",
              flexDirection: "column",
            }}
          >
            <s.SmDivider></s.SmDivider>
            <div className="wow fadeInRight" data-wow-offset="100">
              <s.RdHead
                flex={1}
                style={{
                  display: "flex",
                  fontFamily: "Marvin",
                  justifyContent: "flex-start",
                }}
              >
                {"Underworld Pass"}
              </s.RdHead>
              <s.SmTextPara style={{ marginTop: "3vh" }}>
                {
                  "The Underworld Pass is your VIP gateway to the Hellionz ecosystem and possibly THE most valuable collection we'll ever release. Holders get: 1) Early access to ALL drops after Hellionz Genesis at a 25% discount 2) ONE FREE Genesis mint to claim 48 hours before the public launch 3) Access to an exclusive raffle for 66 1/1 Hellionz Genesis. 1 Pass = 1 Raffle Entry 4) 6 FREE tickets for all future raffles 5) A bonus airdrop of $HellBux to all holders before staking begins. Invest in the Hellionz vision early and your wallet will thank you."
                }
              </s.SmTextPara>
            </div>
            <s.SmDivider></s.SmDivider>
            <div className="wow fadeInRight" data-wow-offset="100">
              <s.RdHead
                flex={1}
                style={{
                  display: "flex",
                  fontFamily: "Marvin",
                  justifyContent: "flex-start",
                }}
              >
                {"Hellionz Genesis"}
              </s.RdHead>
              <s.SmTextPara style={{ marginTop: "3vh" }}>
                {
                  "Hellionz Genesis is our first collection of stakable NFTs and features Frisk, the Sales Imp. Frisk and his clones can be staked to yield $HellBux every second. All Genesis NFTs have a 'Hustle' rating linked to their background type, which determines yield amount when staked. The higher the rating, the more 'Bux your Hellion will yield, with the 66 rare 1/1 Hellionz earning the most by far. Once the tokenomics and economy are in a stable place, we'll release additional characters for more risk & challenge."
                }
              </s.SmTextPara>
            </div>
            <s.SmDivider></s.SmDivider>
            <div className="wow fadeInRight" data-wow-offset="100">
              <s.RdHead
                flex={1}
                style={{
                  display: "flex",
                  fontFamily: "Marvin",
                  justifyContent: "flex-start",
                }}
              >
                {"Raffles!"}
              </s.RdHead>
              <s.SmTextPara style={{ marginTop: "3vh" }}>
                {
                  "After Genesis is released, the team will switch to a provably fair Raffle system for ALL Hellionz giveaways. This will allow us to run fair, organized giveaways and make it much harder for scammers to impersonate us. We're putting a LOT on offer :) Check out the roadmap article once its ready for details."
                }
              </s.SmTextPara>
            </div>
            <s.SmDivider></s.SmDivider>
            <div className="wow fadeInRight" data-wow-offset="100">
              <s.RdHead
                flex={1}
                style={{
                  display: "flex",
                  fontFamily: "Marvin",
                  justifyContent: "flex-start",
                }}
              >
                {"Whitelist Panel"}
              </s.RdHead>
              <s.SmTextPara style={{ marginTop: "3vh" }}>
                {
                  "The Hellionz team is relentless, and our Hunters are constantly searching for fresh talent and partnerships to bring to the table. What does that mean for you? It means you'll be able to spend $HellBux to get whitelisted with all partner projects whenever new collections are announced."
                }
              </s.SmTextPara>
            </div>
            <s.SmDivider></s.SmDivider>
            <div className="wow fadeInRight" data-wow-offset="100">
              <s.RdHead
                flex={1}
                style={{
                  display: "flex",
                  fontFamily: "Marvin",
                  justifyContent: "flex-start",
                }}
              >
                {"Hellionz Generation 2"}
              </s.RdHead>
              <s.SmTextPara style={{ marginTop: "3vh" }}>
                {
                  "Hellionz Gen 2 are our next collections after Genesis, introducing 4 new characters to stake for the Bux. The planned mechanics for each character are broken down on our future roadmap article."
                }
              </s.SmTextPara>
            </div>
            <s.SmDivider></s.SmDivider>
            <div className="wow fadeInRight" data-wow-offset="100">
              <s.RdHead
                flex={1}
                style={{
                  display: "flex",
                  fontFamily: "Marvin",
                  justifyContent: "flex-start",
                }}
              >
                {"Hellionz Lottery"}
              </s.RdHead>
              <s.SmTextPara style={{ marginTop: "3vh" }}>
                {
                 "The big one. The Hellionz Lottery will be a 'sister collection' of the main Hellionz ecosystem, with no crossover with $HellBux or staking pools. Our lottery is based on a rival project that recently flopped. This project had an amazing idea and solid design, but their marketing was beyond terrible. We can do better. We *will* do better."
                }
              </s.SmTextPara>
            </div>
            <s.SmDivider></s.SmDivider>
            <div className="wow fadeInRight" data-wow-offset="100">
              <s.RdHead
                flex={1}
                style={{
                  display: "flex",
                  fontFamily: "Marvin",
                  justifyContent: "flex-start",
                }}
              >
                {"Hellinz DAO"}
              </s.RdHead>
              <s.SmTextPara style={{ marginTop: "3vh" }}>
                {
                 "Our DAO will use $HellBux as a governance token, and will bring a new level of openess and decentralization to the Hellionz ecosystem. More details on our roadmap articles."
                }
              </s.SmTextPara>
            </div>
            <s.SmDivider></s.SmDivider>
            <div className="wow fadeInRight" data-wow-offset="100">
              <s.RdHead
                flex={1}
                style={{
                  display: "flex", fontFamily: "Marvin", justifyContent: "flex-start",
                }}
              >
                {"Hellionz Merch"}
              </s.RdHead>
              <s.SmTextPara style={{ marginTop: "3vh" }}>
                {
                  "We're planning our official line of Hellionz merch! T-shirts, mugs, hats, and all the usual will be up for grabs. We'll also throw in a few novelty items you won't find anywhere else ;)"
                }
              </s.SmTextPara>
            </div>
            <s.SmDivider></s.SmDivider>
          </s.TextBox>
        </s.Container>
      </s.Container>

      <s.Container
        flex={1}
        style={{
          backgroundColor: "var(--bgnew)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaqImg
          src={"/config/images/faqimg.png"}
          flex={1}
          style={{
            display: "flex",
          }}
        ></FaqImg>
        <s.SpacerMedium></s.SpacerMedium>
        <FAQs />
      </s.Container>

      <s.Container
        flex={1}
        style={{
          backgroundColor: "var(--bgft)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* ------- MINTING DAPP ------- */}

        {/* {blockchain.account === "" ||
blockchain.smartContract === null ? (
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
)} */}

        <Footer />
      </s.Container>
    </s.Screen>
  );
}

export default App;
