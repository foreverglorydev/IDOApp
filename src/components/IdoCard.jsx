/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import ConnecttionItems from "./connection";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Badges from "./badges";
import { generateTimeRemainingString } from "../helpers/helpers";
import { useEffect } from "react";

export const IdoBoxRadius = styled.div``;

const IdoCardContainer = styled.div`
  width: 400px;
  @media (max-width: 760px) {
    width: 100%;
  })
`;

const SymbolBadgeFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const IdoCard = (idoData) => {
  const [timeRemaining, setTimeRemaining] = React.useState(
    generateTimeRemainingString(idoData.startTimestamp)
  );

  const interval = setInterval(() => {
    setTimeRemaining(generateTimeRemainingString(idoData.startTimestamp));
  }, 1000);

  useEffect(() => {
    // Specify how to clean up after this effect:
    return function cleanup() {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Link
        to={{
          pathname: `/pool/ido-${idoData.projectId}`,
          state: { idoData },
        }}
      >
        <IdoCardContainer className="h-fit border-2 border-green4 rounded-2xl bg-gray1 bg-opacity-50 p-40">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="text-18 text-green4 flex justify-start">
                  {idoData.tokenMeta.name}
                </div>
                <SymbolBadgeFlex>
                  <div className="text-14 text-white flex justify-start opacity-50 mr-5">
                    {idoData.tokenMeta.symbol}
                  </div>
                  <Badges
                    audit={idoData.tokenMeta.audited}
                    kyc={idoData.tokenMeta.kyc}
                    tango={idoData.tokenMeta.tango}
                  />
                </SymbolBadgeFlex>
              </div>
              <img
                className="w-100 h-100 border-2 border-green4 rounded-full bg-gray1 relative left-15 bottom-15"
                src={idoData.tokenMeta.image}
                alt="idoImage"
              />
            </div>
            <div className="flex">
              <ConnecttionItems socials={idoData.tokenMeta.socials} />
            </div>
            <div className="flex gap-10 pt-25">
              {idoData.tokenMeta.live && (
                <button className="text-white border-2 border-green1 text-10  bg-transparent rounded-full w-80 h-25">
                  LIVE
                </button>
              )}
              {idoData.tokenMeta.upcoming && (
                <button className="text-white font-bold  bg-green1 rounded-full text-10 w-80 h-25">
                  UPCOMING
                </button>
              )}
            </div>
            <div className="pt-20">
              <p className="text-white text-12">
                {idoData.tokenMeta.description}
              </p>
            </div>
            <div className="flex justify-between items-end pt-20">
              <p className="text-white text-20 font-medium">Total Raise</p>
              <p className="text-green1 text-25 font-medium">
                {idoData.totalRaise}
              </p>
            </div>
            <div className="flex justify-between items-end pt-10">
              <p className="text-white text-20 font-medium">Starts</p>
              <p className="text-green1 text-20">{idoData.starts}</p>
            </div>
            <div className="flex justify-between items-end pt-10">
              <p className="text-white text-20 font-medium">Price</p>
              <p className="text-green1 text-20">{idoData.price}</p>
            </div>
            <div className="flex justify-between items-end pt-20">
              <p className="text-white text-12">
                First round starts in {timeRemaining}
              </p>
              <p className="text-green1 text-12">{idoData.totalProgress}%</p>
            </div>
            <div className="w-full bg-gray1 rounded-full h-10 dark:bg-gray-700">
              <div
                className="bg-green1 h-10 rounded-full"
                style={{ width: `${idoData.totalProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-white text-12 opacity-50">0XXX</p>
              <p className="text-white text-12 opacity-50">{`${idoData.supply} / ${idoData.totalSupply}`}</p>
            </div>
            <div className="flex justify-between items-end pt-30">
              <p className="text-white text-12">1x(approx)=</p>
              <p className="text-white text-12">Listing Time</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-green1 text-20 font-medium">
                {idoData.dollarValue}
              </p>
              <p className="text-green1 text-20 font-medium">
                {idoData.listingTime}
              </p>
            </div>
          </div>
        </IdoCardContainer>
      </Link>
    </>
  );
};
