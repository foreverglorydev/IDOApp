import Axios from 'axios';
import Web3Utils from 'web3-utils';
import Web3 from 'web3';

export const generateTimeRemainingString = function (timestamp) {

    // convert seconds to millis
    let end = new Date(timestamp*1000);

    let _second = 1000;
    let _minute = _second * 60;
    let _hour = _minute * 60;
    let _day = _hour * 24;

    let now = new Date();
    let distance = end - now;
    if (distance < 0) {
        return "STARTED!";
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);

    return `${days} days, ${hours} hours`
}


export const ETH_MAINNET = 1;
export const ETH_ROPSTEN = 3;
export const ETH_GANACHE = 1337;
export const ETH_BSC = 56;
export const ETH_BSC_TESTNET = 97;

export const getContract = async (provider) => {    
    let web3 = new Web3(provider);
    window.w3 = web3
    window.web3 = web3    
    let network = await web3.eth.getChainId();
    let request, contract;

    switch (network) {       
        case ETH_BSC_TESTNET:
            request = await Axios.get("/Contract.json");
            contract = request.data;            
            return new web3.eth.Contract(contract, "0x6f3a3c5e73D904e0304332b9e0B9234447f13ED5")

        case ETH_BSC:
            request = await Axios.get("/Contract.json");
            contract = request.data;            
            return new web3.eth.Contract(contract, "0xac7Cc39c28038041Ba5290f4dD5d63e9B7A9a08f")
                        
        default:
            return []
    }


}

export const fromBaseUnit = (value, decimals = 18) =>
    value ? Web3Utils.fromWei(value?.toString(), decimalToUnit(decimals)) : null;

export const toBaseUnit = (value, decimals = 18) =>
    value ? Web3Utils.toWei(value?.toString(), decimalToUnit(decimals)) : null;

const decimalToUnit = (decimal) => {
    switch (decimal) {
        case 18: return 'ether';
        case 15: return 'milliether';
        case 12: return 'microether';
        case 9: return 'gwei';
        case 6: return 'mwei';
        case 3: return 'kwei';
        case 1: return 'wei';
        default: return 'ether';
    }
}