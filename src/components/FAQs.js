import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import * as s from "styles/globalStyles";

// Add new faqs here to render into the website automatically
const faqs = [
  { id: 1, qus: "What utility does this project offer?", ans: "Hellionz is a play-to-earn ecosystem where NFTs are staked to yield $HellBux, our ERC-20 token every second. $HellBux is used to access future drops, mint raffle tickets, purchase WL spots from partners, and more. We will add characters, perks for holders, and more use cases for $HellBux as we continue to thrive." },
  { id: 2, qus: "How can I mint Hellionz?", ans: "All Hellionz will be minted directly from our website. Afterwards, look for one on the secondary market." },
  { id: 3, qus: "Is there a whitelist?", ans: "Underworld Passes are whitelist exclusive, and are the ONLY way to aquire a Hellionz Genesis early. Up to 8 Passes can be minted per whitelisted address. Pass holders are entitled to one FREE Hellionz Genesis each, claimable up to 48 hours before the public mint. We go over the other perks of pass ownership on our roadmap." },
  { id: 4, qus: "How can I get whitelisted for Passes?", ans: "Having the 'Early' role on our server helps. Being active in the community helps. Prove to us you're a valuable member who will go the extra mile, because that definitely helps. We break down the details in #wl-how on our discord."},
  { id: 5, qus: "What is total supply?", ans: "1200 Passes and 6666 Hellionz Genesis. More drops are scheduled after Genesis hits the market."},
  { id: 6, qus: "What is the price to mint?", ans: "120 MATIC for each Pass and 160 MATIC per Hellionz Genesis."},
  { id: 7, qus: "How did Hellionz start?", ans: "Hellionz began with Smoki; an imp with a vision. Once that vision was put to writing and funding was aquired, developers and community staff were brought together to form the Hellionz team."},
  { id: 8, qus: "When will Hellionz be available?", ans: "Genesis is slated to release late Q1 or early Q2 at a stretch." },
  { id: 9, qus: "How to prevent rarity sniping or insider trading?", ans: "All metadata for Hellionz Genesis will be stored privately on ifps to guard against sniping. Then we call chainlink VRF to get a random starting index within the metadata (where in the collection to start). From there we create a provenance hash which is publicly stored on chain and cannot be altered. This way no one will know which token artwork they are getting, and the team cannot manipulate the order to snipe rare Hellionz."},
];

function FAQs(props) {
  return (
    <s.FAQContainer flex={1} style={{}}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <s.FaqDivider></s.FaqDivider>
      </div>
      {/* Render the faqs array data */}
      {faqs.map((item) => (
        <>
          <Disclosure key={item.id}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  style={{
                    backgroundColor: "unset",
                    border: "unset",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  <s.FaqHead flex={1} style={{}}>
                    <span>{item.qus}</span>
                    {open ? (
                      <MinusIcon
                        style={{
                          width: "2.5rem",
                          minWidth: "2.5rem",
                          position: "relative",
                        }}
                      />
                    ) : (
                      <PlusIcon
                        style={{
                          width: "2.5rem",
                          minWidth: "2.5rem",
                          position: "relative",
                        }}
                      />
                    )}
                  </s.FaqHead>
                </Disclosure.Button>
                  <Disclosure.Panel>
                    <s.XsmTextPara
                      style={{ padding: "0 2rem", marginTop: "3vh" }}
                    >
                      {item.ans}
                    </s.XsmTextPara>
                  </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <s.FaqDivider></s.FaqDivider>
          </div>
        </>
      ))}
    </s.FAQContainer>
  );
}

export default FAQs;
