import React,{ useContext, createContext } from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();
export const StateContextProvider = ({children}) => {
    const {contract} = useContract('0x35FfD645E2bAD21453505450694a3AF049B8df06');
    const { mutateAsync: CreateCampaign } = useContractWrite(contract,'createCampaign');
    const address = useAddress();
    const connect = useMetamask();
}