import styled from "styled-components";



// export const LandingWrapper = styled.div`
//   display:flex;
//   flex-direction: column;
//   align-items: center;
//   background-image:url(${BackGround});
//   background-size:100% 100%;
//   width:100%
// `;





export const WelcomeWrapper = styled.div`
  min-height: 100vh;
`;

export const IntroWrapper = styled.div`

  background-size: 100% 100%;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const IntroTitleWrapper = styled.div`
  transition: all 1s;
  opacity: 0;
  transform: scale(0);
  padding: 180px 0 100px;
  h1,
  h2,
  p {
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    font-size: clamp(50px, 6vw, 64px);
    font-weight: 700;
    z-index: 2;
    color: black !important;
    @media screen and (max-width: 768px) {
      line-height: 50px;
    }
  }
  h2 {
    font-size: 36px;
    font-size: clamp(30px, 6vw, 36px);
    font-weight: 600;
    z-index: 2;
    margin-top: -10px;
    margin-bottom: -4px;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, #4986e7 0%, #6ac9f5 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media screen and (max-width: 768px) {
      margin-top: -10px;
    }
  }
  p {
    text-align: center;
    margin: 7px 0 25px 0;
    font-weight: 400;
    z-index: 2;
    color: #555 !important;
  }
`;

export const IntroButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > *:not(:first-child) {
    margin-left: 15px;
  }
`;

export const IntroCardWrapper = styled.div`
  transition: all 1s;
  transform: translateY(100px);
  opacity: 0;
  padding-bottom: 100px;
  h1,
  h2,
  p {
    margin: 0;
    padding: 0;
  }
  & > h1 {
    z-index: 9;
    font-weight: 600;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    color: black !important;
  }
  & > p {
    font-weight: 400;
    z-index: 9;
    margin-top: 8px;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #555 !important;
  }
  & > h2 {
    text-align: center;
    margin: 0 auto;
    font-weight: 500;
    font-size: 18px;
    z-index: 9999;
    line-height: 20px;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, #4986e7 0%, #6ac9f5 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const IntroCardGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  padding-bottom: 90px;
`;

export const IntroCardBody = styled.div`
  padding: 32px;
  text-align: center;
  border-radius: 20px;
  box-shadow: rgb(42 73 108 / 20%) 0px 8px 40px;
  background-color: #fff;
  h2 {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    color: #131419;
  }
`;

export const StableWrapper = styled.div`
  padding: 90px 0;
`;

export const StableTitleWrapper = styled.div`
  h1,
  p {
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 36px;
    text-align: center;
    line-height: 35px;
    color: black !important;
  }
  & > p {
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    z-index: 9999;
    line-height: 20px;
    margin-top: 10px;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, #4986e7 0%, #6ac9f5 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const StableCardWrapper = styled.div`
  padding: 50px;
  margin: 50px auto 0px;
  max-width: 820px;
  border-radius: 20px;
  background-color: rgb(195, 198, 212);
  box-shadow: rgb(0 0 0 / 30%) 0px 8px 32px;
  position: relative;
  box-sizing: border-box;
  max-width: 638px;
  width: 100%;
`;

export const StableButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const StableForm = styled.div`
  width: 90%;
  margin: auto;
`;

export const StableFormLabel = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-weight: 600;
  }
`;

export const StableInput = styled.div`
  margin-top: 10px;
  display: flex;
  border-radius: 100px;
  background: white;
  padding: 10px 20px;
  input {
    border: none;
    outline: none;
    width: -webkit-fill-available;
  }
`;

export const ExchangeSymbol = styled.div`
  cursor: pointer;
  display: flex;
  margin: 40px auto;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgb(150, 159, 201);
  border-radius: 100px;
  color: white;
  svg {
    transform: rotate(90deg);
  }
`;

export const StableSwapBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
