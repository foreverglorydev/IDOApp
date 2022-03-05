import Web3 from 'web3';

let web3Initialized = false;

export const getWeb3 = async (provider) => {
    if (!web3Initialized) {
        window.web3 = new Web3(provider);
        web3Initialized = true;
    }

    return window.web3;
}