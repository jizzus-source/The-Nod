import { ethers } from "ethers";


let _provider: any;
export function isMetaMaskInstalled(){
    return (window as any).ethereum != undefined;
}

export const provider = ()=>{
    if (_provider !== undefined) return _provider;

    if (isMetaMaskInstalled())
        _provider = new ethers.providers.Web3Provider((window as any).ethereum);

    return _provider;
}
