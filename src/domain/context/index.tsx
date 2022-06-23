import React from "react";
import { IFCProps } from "../types";

import { SelectedServiceContextProvider } from "./selectedServiceContext";
import { UserContextProvider } from "./userContext";

const GlobalContext: React.FC<IFCProps> = ({ children }) => {
    return (<UserContextProvider><SelectedServiceContextProvider>{children}</SelectedServiceContextProvider></UserContextProvider>);
};

export default GlobalContext;