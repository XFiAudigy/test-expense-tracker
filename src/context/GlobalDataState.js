import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial state 
const initState = {
   transactions: [
      { id: 1, description: 'Flower', amount: -20 },
      { id: 2, description: 'Salary', amount: 300 },
      { id: 3, description: 'Book', amount: -10 },
      { id: 4, description: 'Camera', amount: 150 }
   ]
}

// Create context of this initial state 
export const GlobalContext = createContext(initState);

// Provider component
export const GlobalProvider = ({ children }) => {
   //state[0] is the context data, state[1] is the dispatch function
   const reducerData = useReducer(AppReducer, initState); //note: transactions is from the initState
   const state = reducerData[0];
   const dispatch = reducerData[1];

   //Actions
   function deleteTrx(id) {
      dispatch({
         type: 'DEL_TRX',
         payload: id
      });
   }

   function addTrx(transaction){
      dispatch({
         type: 'ADD_TRX',
         payload: transaction
      })
   }

   return(
      <GlobalContext.Provider value={{
         transactions: state.transactions,
         deleteTrx,
         addTrx
      }}>
         {children}
      </GlobalContext.Provider>
   )
}