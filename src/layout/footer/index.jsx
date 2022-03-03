import React from "react";
// import {
//   FooterWrapper,
//   FooterContainer,
//   FooterLinkGroup,
//   TextGroup,
//   NavGroup,
//   NavText,
//   DetailGroup,
//   DetailOneGroup,
//   DetailOne,
//   DetailTwoGroup,
//   DetailTwo,
//   FooterEnd,
//   SubscribeInput,
//   SubscribeButton,

// } from "./footer.styled";
import Logo from "../../assets/image/Homepage/SVG/Asset 410.svg";
import ConnecttionItems from "../../components/connection";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
`;

const FooterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 16px;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
  })
`;

const InnerFlex = styled.div`
  display: flex;
  margin-right: 0;
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 16px;
    width: 100%;
    align-items: center;
    justify-content: center;
  })
`;

const Footer = () => {
  return (
    <FooterContainer className="bg-black">
      <FooterFlex className="px-20">
        <div className=" flex justify-center flex-row">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="logo" className="h-65 md:h-95" />
          </div>
          <div className="mx-60 mb-20 flex items-end justify-between box-border">
            <ConnecttionItems socials={[]}/>
          </div>
        </div>

        <InnerFlex>
          <div className="flex flex-col">
            <div className="flex justify-between flex-row my-20">
              <a href="/">
                <div className="text-white text-16 mr-40">POOLS</div>
              </a>
              <div className="text-white text-16 mr-40">TOKEN CREATION</div>
              <a href="https://ignite-defi.com/">
              <div className="text-white text-16 mr-40">ABOUT</div>
              </a>
              <a href="https://lock.sparklaunch.net">
                <div className="text-white text-16">TOKEN LOCKER</div>
              </a>
            </div>
            <div className="flex flex-row my-20">
              <div className="w-full flex flex-col">
                <div className="text-white mb-10">@ Copyright IgniteDefi 2022.</div>
                <div className="text-white"> proudly Made for IgniteDefi.</div>
              </div>
              <div className="w-full flex flex-col pl-40">
                <div className="text-white underline mb-5">Privacy Policy</div>
                <div className="text-white underline">Terms of use</div>
              </div>
            </div>
          </div>
        </InnerFlex>

        <div className="flex flex-col justify-center items-end ">
          <div className="text-white text-18 mb-15 ">Subscribe to our Newsletter</div>
          <input className="px-30 box-border border-2 border-green3 rounded-xl mb-15"></input>
          <button className="text-white bg-gradient-to-r from-green3 to-green2 px-15 rounded-lg text-18">Subscribe</button>
        </div>
      </FooterFlex >
    </FooterContainer >
  );
};

export default Footer;

