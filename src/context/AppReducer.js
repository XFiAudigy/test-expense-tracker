export default (state, action) => {
   switch (action.type) {
      case 'DEL_TRX':
         return {
            ...state,
            transactions: state.transactions.filter(transaction => transaction.id != action.payload)
         }
      case 'ADD_TRX':
         return {
            ...state,
            transactions: [action.payload, ...state.transactions]
         }
      default:
         return state;
   }
}