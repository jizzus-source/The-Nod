import { ethers } from "ethers";
import { NFTContractABI } from "./abi/NFTContract";
import { SellerContractABI } from "./abi/SellerContract";
import { TokenContractABI } from "./abi/TokenContract";


let _provider: any;
let TokenContract: any;
let NFTContract: any;
let SellerContract: any;

const SELLER_ADDRESS = "0x6DaD08f36cc3e0c94cD4c5ED4508E793447596AC";
const NFT_ADDRESS = "0x742Dd0F2d16dF25c7Ca737c5f3841118a9C60F5a";
const TOKEN_ADDRESS = "0xa8377aE6dC919712C31194277b89A023C4a604cC";
const MAX_INT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

export function isMetaMaskInstalled(){
    return (window as any).ethereum != undefined;
}

export async function provider () {
    if (_provider !== undefined) return _provider;

    if (isMetaMaskInstalled()) {
        _provider = new ethers.providers.Web3Provider((window as any).ethereum);
        await _provider.send("eth_requestAccounts", []);
        const signer = _provider.getSigner();
        console.log("Account:", await signer.getAddress());
        TokenContract = new ethers.Contract(TOKEN_ADDRESS, TokenContractABI, signer);
        NFTContract = new ethers.Contract(NFT_ADDRESS, NFTContractABI, signer);
        SellerContract = new ethers.Contract(SELLER_ADDRESS, SellerContractABI, signer);
    }

    return _provider;
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