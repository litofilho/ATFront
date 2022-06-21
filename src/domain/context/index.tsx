import React from "react";
import { IFCProps } from "../types";

import { SelectedServiceContextProvider } from "./selectedServiceContext";

const GlobalContext: React.FC<IFCProps> = ({ children }) => {
    return (<SelectedServiceContextProvider>{children}</SelectedServiceContextProvider>);
};

export default GlobalContext;