/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
import React from "react";

import BackGround from "../../assets/image/Homepage/1x/1Background.png";
import ConnecttionItems from "../../components/connection";
import etherSmallIcon from "../../assets/image/Presales Page/SVG/Asset 705.svg";
import bnbSmallIcon from "../../assets/image/Presales Page/SVG/WIbhqs.tif.svg";
import checkSmallIcon from "../../assets/image/Presales Page/SVG/Asset 826.svg";
import roundSmallIcon from "../../assets/image/Presales Page/SVG/Asset 875.svg";
import lockSmallIcon from "../../assets/image/Presales Page/SVG/Asset 876.svg";
import dropSmallIcon from "../../assets/image/Presales Page/SVG/Asset 871.svg";
import idoSmallIcon from "../../assets/image/Presales Page/SVG/Asset 861.svg";
import fcfsSmallIcon from "../../assets/image/Presales Page/SVG/Asset 854.svg";
import saleSmallIcon from "../../assets/image/Presales Page/SVG/Asset 855.svg";
import registerSmallIcon from "../../assets/image/Presales Page/SVG/Asset 856.svg";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import Badges from "../../components/badges";
import { fromBaseUnit, generateTimeRemainingString, toBaseUnit } from "../../helpers/helpers";

import { connect } from 'react-redux';

import {getContract} from './../../helpers/helpers'
import {IdoItems} from './../../data/IdoItems'

const MainContainer = styled.div`
  padding: 100px;

  @media only screen and (max-width: 1200px) {
    padding: 30px;
  }

  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  padding: 60px;
  --tw-border-opacity: 1;
  border-width: 2px;
  border-color: rgba(93, 251, 115, var(--tw-border-opacity));

  @media only screen and (max-width: 1200px) {
    align-items: center;
    flex-direction: column;
    padding: 20px;
  }

  @media only screen and (max-width: 800px) {
    border: none;
    padding: 0;
  }
`;

const MainCard = styled.div`
  width: 60%;

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const WalletCard = styled.div`
  width: 40%;

  @media only screen and (max-width: 1200px) {
    width: 60%;
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const SymbolBadgeFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export class PoolPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date: new Date(),
      interval: null,
      timeRemaining: "",
      isLoading: 0,
      buysucceed: false,
      buyfailed: false,

      hardCap: 0,
      status: '',
      amount: 1,
      inavalidAmount: false,            
      phase: "0",
      currentsupply: 0,
      idoData: IdoItems[this.props.location.pathname.split('-')[1]-1]


    };
  }

  

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  async componentDidMount () {
    if(this.props.wallet) {
      await this.getContractdata(this.props.wallet)
    }    
    if (this.props.location.state) {
      this.setState({
        timeRemaining: generateTimeRemainingString(
          this.state.idoData.startTimestamp
        ),
      });
      
      this.state.interval = setInterval(() => {
        this.setState({
          timeRemaining: generateTimeRemainingString(
            this.state.idoData.startTimestamp
          ),
        });
      }, 1000);

      this.state.interval = setInterval(() => {
        this.setState({
          timeRemaining: generateTimeRemainingString(
            this.state.idoData.startTimestamp
          ),
        });
      }, 1000);
      
    }
  }

  async componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if(nextProps.wallet !== undefined) {            
      await this.getContractdata(nextProps.wallet)
    }            
  }

  checkAmount = (e) => {

    let value = e.target.value    
    if(value > 1) {
      value = 1
    }

    this.setState({amount: value})

    if(value < 0.01) {
      this.setState({inavalidAmount: true})
    } else {
      this.setState({inavalidAmount: false})
    }

  };


  buyToken = async()=> {

    
    this.setState({buysucceed:false})
    this.setState({buyfailed:false})

    let phase = this.state.phase
    let amount = this.state.amount

    amount = toBaseUnit(amount)
    
    

    if(!this.state.inavalidAmount && phase !== "0") {

      this.setState({isLoading: 1})
      let contract = await getContract(this.props.wallet);
      
      
    try { 
      if(phase === "1" ) {
                      
        let result = await contract
        .methods
        .userDepositsWhitelist()
        .send({ from: this.props.address,  value: amount })

        
      }

      else if(phase === "2") {
        let result = await contract
        .methods
        ._UserDepositPublicPhase()
        .send({ from: this.props.address,  value: amount })

        
      }
      this.setState({buysucceed: 1})
    }

    catch{
      this.setState({buyfailed: 1})
    }
    finally {
      this.setState({isLoading: 0})
    }
  }
    
    
  }

  getContractdata = async (wallet)=> {
    
    let contract = await getContract(wallet);
                    
    let hardCap = await contract
    .methods
    .returnHardCap()
    .call();

    this.setState({hardCap: fromBaseUnit(hardCap)})      
    
    
    let phase = await contract
      .methods
      ._phase()
      .call();
                  
    if(phase === "0"){
      this.setState({status: 'Upcoming'})       
    } else {
      this.setState({status: 'Live'})
    }
    
    //phase
    this.setState({phase: phase})
    //this.setState({phase: "1"})


    let currentsupply = await contract
      .methods
      .GweiCollected()
      .call();
    this.setState({currentsupply: fromBaseUnit(currentsupply)})
  }

  withdrawToken = async ()=> {
    
    
    let contract = await getContract(this.props.wallet);
    this.setState({isLoading: 1})
    try {

      let result = await contract
      .methods
      .withdrawTokens()
      .send({ from: this.props.address})
      
    } 
    catch {
      
    } finally {
      this.setState({isLoading: 0})
    }
  }


  withdrawBNB = async ()=> {
       
    let contract = await getContract(this.props.wallet);    
    this.setState({isLoading: 1})
    try {

      let result = await contract
      .methods
      .withdrawBaseToken()
      .send({ from: this.props.address})
      
    } 
    catch {
      
    } finally {
      this.setState({isLoading: 0})
    }
  }

  render() {
    if (!this.props.location.state) {
      //return <Redirect to={"/"} />;      
    }

    return (
      <MainContainer className="h-100vh flex flex-col items-center w-full bg-cover bg-center bg-great">
        <FlexContainer className="w-full h-full border-2 px-200 gap-30 border-green4 rounded-2xl bg-gray1 bg-opacity-20 flex">
          <MainCard className="h-full border-2 rounded-2xl bg-gray1 p-60 flex flex-col bg-opacity-80">
            <div className="flex justify-between">
              <div className="flex relative right-20 bottom-20 gap-20 items-center">
                <img
                  className="w-80 h-80 border-2 rounded-full border-green2"
                  src={this.state.idoData.tokenMeta.image}
                  alt="idoImage"
                />
                <SymbolBadgeFlex>
                  <p className="text-20 text-green2 mb-10">
                    {this.state.idoData.tokenMeta.name}
                  </p>
                  <Badges
                    audit={this.state.idoData.tokenMeta.audited}
                    kyc={this.state.idoData.tokenMeta.kyc}
                    tango={this.state.idoData.tokenMeta.tango}
                  />
                </SymbolBadgeFlex>
              </div>
              <div className="w-80 h-80 rounded-full relative left-20 bottom-20">
                <img
                  src={this.state.idoData.tokenMeta.chainImage}
                  alt="blockchain"
                />
              </div>
            </div>
            <div className="mb-20">
              <p className="text-white text-15 opacity-70">
                {this.state.idoData.tokenMeta.description}
              </p>
            </div>
            <div className="flex mb-20">
              <ConnecttionItems
                socials={this.state.idoData.tokenMeta.socials}
              />
            </div>
            <div>
              <p className="text-20 text-green2 font-medium mb-10">
                POOL DETAILS
              </p>
            </div>
            <div className="flex mb-30">
              <div className="flex w-2/4">
                <p className="text-15 text-white font-bold">Access type: </p>
                <p className="text-15 text-white">
                  {this.state.idoData.accessType}
                </p>
              </div>
              <div className="flex">
                <p className="text-15 text-white font-bold">Hard Cap : </p>
                <p className="text-15 text-white">
                  {this.state.hardCap} BNB
                </p>
              </div>
            </div>
            <div className="flex border-b-2 border-whtie border-opacity-30">
              <span className="w-2/6 text-15 text-white font-bold">
                Swap Rate
              </span>
              <span className="text-15 text-white">
                {this.state.idoData.swapRate}
              </span>
            </div>
            <div className="flex border-b-2 border-whtie border-opacity-30">
              <span className="w-2/6 text-15 text-white font-bold">
                Start/end
              </span>
              <span className="text-15 text-white">
                {this.state.idoData.startEnd}
              </span>
            </div>
            <div className="flex border-b-2 border-whtie border-opacity-30">
              <span className="w-2/6 text-15 text-white font-bold">
                registration
              </span>
              <span className="text-15 text-white">
                {this.state.idoData.registration}
              </span>
            </div>
            <div className="flex border-b-2 border-whtie border-opacity-30">
              <span className="w-2/6 text-15 text-white font-bold">
                FCFS Opens
              </span>
              <span className="text-15 text-white">
                {this.state.idoData.fcfsOpens}
              </span>
            </div>
            <div className="flex mb-10">
              <span className="w-2/6 text-15 text-white font-bold">
                Base Allocation
              </span>
              <span className="text-15 text-white">
                {this.state.idoData.baseAllocation}
              </span>
            </div>
            <div className="flex mb-10">
              <div className="w-2/4"></div>
              <span className="text-white text-10 opacity-60 w-1/6">
                Register
              </span>
              <span className="text-white text-10 opacity-60">
                {this.state.idoData.register}
              </span>
            </div>
            <div className="flex mb-10">
              <div className="w-2/4"></div>
              <span className="text-white text-10 opacity-60 w-1/6">Sale</span>
              <span className="text-white text-10 opacity-60">
                {this.state.idoData.sale}
              </span>
            </div>
            <div className="flex mb-10">
              <div className="w-2/4"></div>
              <span className="text-white text-10 opacity-60 w-1/6">FCFS</span>
              <span className="text-white text-10 opacity-60">
                {this.state.idoData.fcfs}
              </span>
            </div>
            <p className="text-25 text-green1 font-bold mb-10">TOKEN</p>
            <div className="flex mb-10">
              <span className="text-white text-15 w-1/5 font-medium">
                Tokens
              </span>
              <span className="text-green1 text-15">
                {this.state.idoData.tokens}
              </span>
            </div>
            <div className="flex">
              <span className="text-white text-15 w-1/5 font-medium">
                Types
              </span>
              <span className="text-white text-15">
                {this.state.idoData.types}
              </span>
            </div>
          </MainCard>
          <WalletCard className="h-full bg-gray1 flex flex-col w-2/5 gap-30 bg-opacity-80">
            <div className="w-full border-2 flex-col border-green4 rounded-2xl bg-gray1 bg-opacity-20 p-40 flex h-3/5">
              <div className="flex h-fit">
                <img
                  className="relative bottom-20 right-20 w-100   h-100 border-2 border-green1 rounded-full"
                  src={this.state.idoData.tokenMeta.image}
                  alt="idoImage"
                />
                <div className="flex flex-col h-full justify-between">
                  <p className="text-20 text-green1 font-bold">
                    {this.state.idoData.tokenMeta.name}
                  </p>
                  <p className="text-15 text-white opacity-50">
                    {this.state.idoData.tokenMeta.symbol}
                  </p>
                  <div className="flex gap-10 mt-20 mb-20">
                    <button className="flex border border-green1 w-fit h-fit text-7 px-10 py-5 text-white  rounded-xl gap-10">
                      <img
                        src={roundSmallIcon}
                        alt="roundsmallicon"
                        className="w-10 h-10"
                      />
                      Register
                    </button>
                    <button className="flex w-fit h-fit text-7 px-10 py-5 text-white bg-gradient-to-r from-green3 to-green2 rounded-xl gap-10">
                      <img
                        src={lockSmallIcon}
                        alt="locksmallicon"
                        className="w-10 h-10"
                      />
                      level
                    </button>
                  </div>
                </div>
              </div>
              {/**
              <div className="bg-black w-full h-100 px-30 py-20 rounded-xl">
                <button className="flex w-full h-full text-15 text-white bg-gradient-to-r from-green3 to-green2 rounded-xl items-center justify-center gap-20">
                  connect Wallet
                  <img
                    src={dropSmallIcon}
                    alt="dropsmallicon"
                    className="w-15 h-15"
                  />
                </button>
              </div>
               */}
              <div className="flex justify-end">
                <p className="text-20 text-white opacity-50 border-b">
                  How to participate
                </p>
              </div>
              <p className="text-25 text-green1 mb-10">
                {this.state.idoData.price}
              </p>
              <p className="text-20 text-green1">
                {this.state.idoData.price
                  .split(/( = )/)
                  .reverse()}
              </p>
              <div className="flex justify-between items-end mt-20">
                <p className="text-white text-12">
                  First round starts in {this.state.timeRemaining}
                </p>
                <p className="text-green1 text-12">
                  {this.state.idoData.totalProgress}%
                </p>
              </div>
              <div className="w-full bg-gray1 rounded-full h-10 dark:bg-gray-700">
                <div
                  className="bg-green1 h-10 rounded-full"
                  style={{
                    width: `${(this.state.currentsupply /this.state.hardCap)*100}%`,
                  }}
                ></div>
              </div>
              <div className="flex justify-between items-end mb-10">
                <p className="text-white text-12 opacity-50">0XXX</p>
                <p className="text-white text-12 opacity-50">{`${this.state.currentsupply} / ${this.state.hardCap} BNB`}</p>
              </div>
              <div className="flex mb-10">
                <img
                  src={idoSmallIcon}
                  alt="idoicon"
                  className="w-20 h-20 mr-15"
                />
                <p className="text-white text-12">
                  IDO and distribution on BSC
                </p>
              </div>
              <div className="flex mb-10">
                <img
                  src={registerSmallIcon}
                  alt="registericon"
                  className="w-20 h-20 mr-15"
                />
                <p className="text-white text-12 w-1/5">Register</p>
                <p className="text-white text-12">
                  {this.state.idoData.register}
                </p>
              </div>
              <div className="flex mb-10">
                <img
                  src={saleSmallIcon}
                  alt="saleicon"
                  className="w-20 h-20 mr-15"
                />
                <p className="text-white text-12 w-1/5">Sale</p>
                <p className="text-white text-12">
                  {this.state.idoData.sale}
                </p>
              </div>
              <div className="flex mb-10">
                <img
                  src={fcfsSmallIcon}
                  alt="fcfsicon"
                  className="w-20 h-20 mr-15"
                />
                <p className="text-white text-12 w-1/5">FCFS</p>
                <p className="text-white text-12">
                  {this.state.idoData.fcfs}
                </p>
              </div>
            </div>
            { (this.state.phase!== "3" && this.state.phase!== "4") &&
            <div className="w-full p-20 flex h-2/5 bg-gray-800 flex-col">
              <p className="text-white text-15 pb-15">
                Amount:{" "}
                {`max(${this.state.idoData.tradeInformation.maxVal}${this.state.idoData.tradeInformation.symbol})`}
              </p>
              <div className="border-2 border-white py-5 h-fit rounded-xl flex w-full px-10 mb-15 justify-between">
                <input
                  type="number"
                  min={
                    this.state.idoData.tradeInformation.minVal
                  }
                  max={
                    this.state.idoData.tradeInformation.maxVal
                  }
                  className="bg-transparent text-white w-full"
                  onChange={(e) => this.checkAmount(e)}
                  value= {this.state.amount}
                />
                <button className="text-15 text-green1" onClick={()=> this.setState({amount: 1})}>MAX</button>
              </div>

              { this.state.inavalidAmount && <div style={{color: "red"}}> invalid amount</div>}
              
              { (this.state.isLoading === 0 && this.state.phase!=="3" && this.state.phase!=="4")  && 
              <div className="border-2 border-white py-5 h-fit rounded-xl flex w-1/4 px-10 mb-25 justify-between items-center">
                <img
                  src={checkSmallIcon}
                  alt="checksmallicon"
                  className="w-15 h-15"
                />               
                <button className="text-15 text-white " onClick={()=> this.buyToken()}>Buy</button>                
              </div>
              }

              {this.state.isLoading===1 &&
              
                <div className="border-2 border-white py-5 h-fit rounded-xl flex w-1/4 px-10 mb-25 justify-between items-center">
                  <img
                    src={checkSmallIcon}
                    alt="checksmallicon"
                    className="w-15 h-15"
                  />
                
                  <button className="text-15 text-white " disabled>loading </button>
                  
                </div>
              }

              { this.state.buysucceed && <div className="text-15 text-green1 ">Buy has succeeded</div>}

              { this.state.buyfailed && <div style={{color: "red"}}> Buy has Failed </div>}

              <div className="flex justify-between border-t border-b border-white border-opacity-20">
                <p className="text-15 text-white">Status</p>
                <p className="text-15 text-green1 ">
                  {this.state.status}                  
                  {/*this.state.idoData.tradeInformation.status*/}
                </p>
              </div>
              <div className="flex justify-between border-b border-white border-opacity-20">
                <p className="text-15 text-white">Sale type</p>
                <p className="text-15 text-green1 ">
                  {this.state.idoData.tradeInformation.saleType}
                </p>
              </div>
              <div className="flex justify-between border-b border-white border-opacity-20">
                <p className="text-15 text-white">Minimum Buy</p>
                <p className="text-15 text-white ">{`${this.state.idoData.tradeInformation.minVal} ${this.state.idoData.tradeInformation.symbol}`}</p>
              </div>
              <div className="flex justify-between border-b border-white border-opacity-20">
                <p className="text-15 text-white">Maximum Buy</p>
                <p className="text-15 text-white ">{`${this.state.idoData.tradeInformation.maxVal} ${this.state.idoData.tradeInformation.symbol}`}</p>
              </div>
            </div>
            }

            { ( this.state.phase === "3" && this.state.isLoading === 0) &&
            <div style={{margin: "0 auto"}}>
              <p className="text-15 text-white">Sale Succecs</p>
              <div className="border-2 border-white py-5 h-fit rounded-xl flex  px-10 mb-25 justify-between items-center">
                <img
                  src={checkSmallIcon}
                  alt="checksmallicon"
                  className="w-15 h-15"
                />               
                <button className="text-15 text-white " onClick={()=> this.withdrawToken()}>withdraw Token</button>                
              </div>
            </div>
            }
            
            { ( this.state.phase === "4" && this.state.isLoading === 0) &&
             <div style={{margin: "0 auto"}}>
             <p className="text-15 text-white">Sale Failed</p>
              <div className="border-2 border-white py-5 h-fit rounded-xl flex px-10 m-10 justify-between items-center">
                <img
                  src={checkSmallIcon}
                  alt="checksmallicon"
                  className="w-15 h-15"
                />               
                <button className="text-15 text-white " onClick={()=> this.withdrawBNB()}>Withdraw BNB</button>                
              </div>
              </div>
            }

            {this.state.isLoading===1 &&
              <div style={{margin: "0 auto"}}>             
              <div className="border-2 border-white py-5 h-fit rounded-xl px-10 mb-25 justify-between items-center">                               
                <button className="text-15 text-white " disabled>loading </button>                  
              </div>
              </div>
            }                           
          </WalletCard>
        </FlexContainer>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wallet: state.wallet,
    address: state.address
  };
}

export default connect(mapStateToProps)(PoolPage);
