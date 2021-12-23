import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalDataState';

export const TransactionItem = ({item}) => {
   const { deleteTrx } = useContext(GlobalContext);
   var symbol = item.amount < 0 ? "-" : "+";
   return (
      <li className={item.amount < 0 ? "minus" : "plus"}>
         {item.description || "no desc"} <span>{symbol}${Math.abs(item.amount) || "0.00"}</span> 
         <button className="delete-btn" onClick={() => { deleteTrx( item.id ) }}>x</button>
      </li>
   )
}
