import React, { useContext, createContext } from "react";

import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const user = {
        username: "",
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        kycVerified: "",
        type: "",
    };

    return <StateContext.Provider value={{ user }}>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
