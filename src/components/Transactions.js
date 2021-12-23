import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalDataState';
import { TransactionItem } from './TransactionItem';

export const Transactions = () => {
   const { transactions } = useContext(GlobalContext);
   const dataRows = transactions ? 
   transactions.map((item, index) => 
         <TransactionItem item={item} key={index}/>
      ) : <li>You have no recent transactions</li>
   return (
      <div>
         <h3>History</h3>
         <ul className="list">
            {dataRows}
         </ul>
      </div>
   )
}
