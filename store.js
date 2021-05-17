import React, { useState, createContext, useReducer } from "react";
import {AsyncStorage, } from 'react-native';

// Create Context Object
const initialState = {
    isLoading:false,
    bottomCard:false,
    longCard:false,
    longCard2: false,
    successMessage: false,
   
};


export const OverallContext = createContext(initialState);


export const OverallContextProvider = props => {
    

  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
            case 'startLoading':
                return {...state, isLoading: true}
            case 'showBottomCard':
                return {...state, bottomCard: action.payload}
            case 'showLongCard':
                return {...state, longCard: action.payload}
            case 'showLongCard2':
                return {...state, longCard2: action.payload}
            case 'setSuccessMessage':
                return {...state, successMessage: action.payload}
           

        default:
            throw new Error();
        };
  },initialState)
  return (
    <OverallContext.Provider value={{ state, dispatch }}>
      {props.children}
    </OverallContext.Provider>
  );
};