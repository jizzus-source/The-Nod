import { ethers } from "ethers";
import { NFTContractABI } from "./abi/NFTContract";
import { SellerContractABI } from "./abi/SellerContract";
import { TokenContractABI } from "./abi/TokenContract";


let _provider: any;
let TokenContract: any;
let NFTContract: any;
let SellerContract: any;

const SELLER_ADDRESS = "0xff4ac32f8765fce7578f137f8a9b8873654703c6";
const NFT_ADDRESS = "0xec838e7165ccf9541ff5eaf3e6bdd033c99f97ad";
const TOKEN_ADDRESS = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
const MAX_INT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
const CHAINID = 1;

export function isMetaMaskInstalled(){
    return (window as any).ethereum != undefined;
}

export async function provider () {
    if (!_provider && isMetaMaskInstalled()) {
        _provider = new ethers.providers.Web3Provider((window as any).ethereum, 'any');
        await _provider.send("eth_requestAccounts", []);
        const signer = _provider.getSigner();
        
        TokenContract = new ethers.Contract(TOKEN_ADDRESS, TokenContractABI, signer);
        NFTContract = new ethers.Contract(NFT_ADDRESS, NFTContractABI, signer);
        SellerContract = new ethers.Contract(SELLER_ADDRESS, SellerContractABI, signer);
    }


    if (await getChainId() != CHAINID) {
        await (window as any).ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
        });

        await provider();
    }

    (window as any).ethereum.on('accountChanged', async () => { _provider = null; await provider() });
    (window as any).ethereum.on('chainChanged', async () => { _provider = null; await provider() });

    return _provider;
}

export async function reloadProvider () {
}

export async function ethAccount () {
    await provider();
    const accounts = await _provider.listAccounts();

    return accounts[0];
}

export async function allowance () {
    await provider();
    return await TokenContract.allowance(await ethAccount(), SELLER_ADDRESS);
}

export async function approve () {
    await provider();
    return await TokenContract.approve(SELLER_ADDRESS, MAX_INT);
}

export async function getChainId () {
    return (await _provider.getNetwork()).chainId;
}

export async function ensureChain(chainId: number) {
    const chainid = await getChainId();

    if (chainid === chainId) return;
}

export async function buy (rarity: number) {
    if (typeof rarity !== "number" || rarity < 1 || rarity > 3) throw new Error("Buy rarity must be a number between 1 and 3");

    let price = "0";
    switch (rarity) {
        case 1:
            price = "250" + "000000000000000000";
            break;
        case 2:
            price = "500" + "000000000000000000";
            break;
        case 3:
            price = "1000" + "000000000000000000";
            break;
    }

    if ((await allowance()).lt(price)) {
        (await approve()).wait();
    }

    return await SellerContract.buy(rarity);
}