import React,{ useContext, createContext } from "react";
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();
export const StateContextProvider = ({children}) => {
    const {contract} = useContract('0x35FfD645E2bAD21453505450694a3AF049B8df06');
    const { mutateAsync: createCampaign } = useContractWrite(contract,'createCampaign');
    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address, //owner
                form.title,
                form.description,
                form.target,
                new Date(form.deadline).getTime() /1000,
                form.image
            ]);
            console.log("contract call success ",data);
        } catch (error) {
            console.log("contract call failed ", error);
        }
    }
    return(
        <StateContext.Provider
        value={{ address,
        contract,
        createCampaign : publishCampaign,}}
        >
        {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => {
    useContext(StateContext);
}