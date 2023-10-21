import React, { useContext, createContext } from "react";

import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    

    return <StateContext.Provider>{children}</StateContext.Provider>;
};

export const useStateContext = () => useContext(StateContext);
