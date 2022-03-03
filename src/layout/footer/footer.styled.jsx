import styled from "styled-components";

export const StyledFooter = styled.div`
    width:100%;
    background-color:black;
`;
export const FooterWrapper = styled.div`
    width:100%;
    background-color:black;
    display:flex;
    justify-content:center;
    height:150px;
`;

export const FooterContainer = styled.div`
    max-width:1440px;
    width:100%;
    background-color:black;
    padding: 0 20px;
    display:flex;
    align-items:center;
    // justify-content:space-between;
`;
export const FooterLinkGroup = styled.div`
    max-width:200px;
    height:150px;
    width:200px;
    padding: 0px 20px 30px 20px;
    margin: 0px 40px;
    display: flex;
    align-items: end;
    justify-content:space-between;
    box-sizing: border-box;
`;
export const TextGroup = styled.div`
    max-width:1000px;
    flex-grow: 1;
    display: grid;
    height:150px;
    align-items: center;
`;
export const NavGroup = styled.div`
    max-width:500px;
    width:100%;
    display:flex;
    justify-content:space-between;
    
`;
export const NavText = styled.span`
    color:white;
    font-size: 16px;
`;
export const DetailGroup = styled.div`
    max-width:600px;
    width:100%;
    display:flex;
    flex-direction: row;
`;
export const DetailOneGroup = styled.div`
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction: column;
`;
export const DetailTwoGroup = styled.div`
    max-width:500px;
    width:100%;
    display:flex;
    flex-direction: column;
   
`;
export const DetailOne = styled.span`
    color:white;
`;

export const DetailTwo = styled.span`
    color:white;
    text-decoration: underline;
`;

export const FooterEnd = styled.div`
    max-width:350px;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:flex-end;
`;
export const SubscribeInput = styled.input`
width: 100%;
padding: 4px 4px;
margin: 8px 0;
box-sizing: border-box;
border: 1px solid #61ED64;
border-radius: 10px;
`;

export const SubscribeButton = styled.button`
width: fit-content;
color: white;
border: 1.5px solid #229503;
padding: 2px 25px;
border-radius: 14px;
font-size: initial;
background-image: linear-gradient(to right,#61ED64 ,#229503);
`;