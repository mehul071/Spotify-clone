import React ,{ createContext,useContext,useReducer } from "react";

export const DateLayerContext = createContext();

export const DataLayer = ({initialstate,reducer,children })=>(
    <DateLayerContext.Provider value={useReducer(reducer,initialstate)}>
        {children}
    </DateLayerContext.Provider>
)
export const useDataLayerValue = () => useContext(DateLayerContext);