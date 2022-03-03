import React from "react";

import TANGO from "../assets/image/kycauditedtango/kyc audited big details/1x/Asset 917.png";
import KYC from "../assets/image/kycauditedtango/kyc audited big details/1x/Asset 921.png";
import AUDITED from "../assets/image/kycauditedtango/kyc audited big details/1x/Asset 919.png";

import styled from "styled-components";

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const BadgeImg = styled.img`
  height: 20px;

  @media (min-width: 760px) {
    height: 15px;
  })
`;

const BadgeItem = ({ source, alt }) => {
    return (
        <BadgeImg src={source} alt={alt} className="mx-5" />);
};

const Badges = ({kyc, audit, tango}) => {
    return (
        <BadgeContainer>
            {kyc && <BadgeItem key={1} source={KYC} alt="Audited Crypto"/>}
            {audit && <BadgeItem key={2} source={AUDITED} alt="Tango Crypto"/>}
            {tango && <BadgeItem key={0} source={TANGO} alt="KYC Crypto"/>}
        </BadgeContainer>

    );
};

export default Badges;