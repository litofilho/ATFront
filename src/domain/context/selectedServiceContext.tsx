import React, { createContext, useState, FC } from "react";
import { IFCProps, IService } from "../types";

type PropsSelectedServiceContext = {
    state: IService
    setState: React.Dispatch<React.SetStateAction<IService>>;
}

export const DEFAULT_VALUE = {
    state: {
        title: "",
        tags: [""],
        location: "",
        bgImg: "",
        description: "",
    },
    setState: () => { },
};

export const SelectedServiceContext = createContext<PropsSelectedServiceContext>(DEFAULT_VALUE)



export const SelectedServiceContextProvider: FC<IFCProps> = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <SelectedServiceContext.Provider
            value={{
                state,
                setState
            }}
        >
            {children}
        </SelectedServiceContext.Provider>
    )
}