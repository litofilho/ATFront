import { User } from "firebase/auth";
import React, { createContext, useState, FC } from "react";
import { IFCProps } from "../types";

type PropsUserContext = {
    state: User | {}
    setState: React.Dispatch<React.SetStateAction<User | {}>>;
}

export const DEFAULT_VALUE = {
    state: {},
    setState: () => { },
};

export const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)



export const UserContextProvider: FC<IFCProps> = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state)
    return (
        <UserContext.Provider
            value={{
                state,
                setState
            }}
        >
            {children}
        </UserContext.Provider>
    )
}