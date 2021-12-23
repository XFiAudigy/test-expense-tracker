import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalDataState';
import Modal from 'react-modal';
import { MdClose } from "react-icons/md";

export const AddTrxModal = (props) => {

   /**
    * - add popup here
    * - add button to toggle popup
    * - need redux to update data state, or use context API
    */

   const { transactions, addTrx } = useContext(GlobalContext);
   const [text, setText] = useState(''); //either use this or make a react component
   const [amount, setAmount] = useState(0);
   const [modalIsOpen, setIsOpen] = useState(false);
   const [showError, setErrorFlag] =  useState(false);
 
   const onSubmit = (e) => {
      e.preventDefault();
      if (text.length > 0 && amount.length > 0) { //basic validation
         const newTrx = {
            id: generateNewID(),
            description: text,
            amount: +amount //parse to integer
         };
         
         hideFieldError();
         addTrx(newTrx);
         setText("");
         setAmount("");
         closeModal();
      } else {
         showFieldError();
      }
   }

   const generateNewID = () => {
      var newID = Math.floor(Math.random() * 1000000);
      var existingIDs = [];

      transactions.forEach(function (item, index) {
         existingIDs.push(item.id);
      });

      if (existingIDs.includes(newID)) {
         generateNewID();
      } else {
         return newID;
      }
   }

   function showFieldError(){
      setErrorFlag(true);
   }

   function hideFieldError(){
      setErrorFlag(false);
   }

   function openModal() {
      setIsOpen(true);
   }

   function afterOpenModal() {
      // references are now sync'd and can be accessed. do after
   }

   function closeModal() {
      setErrorFlag(false);
      setIsOpen(false);
   }

   return (
      <div>
         <button onClick={openModal} className="btn">Add transaction</button>
         {/* <Popup trigger={<button className="btn">Add transaction</button>} position="center center"> */}
         <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            ariaHideApp={false}
            className={"modal-style"}
            overlayClassName={"modal_overlay_style"}>
            <div className="modal-header">
               <h3 className="modal-header-text">Add new transaction</h3>
               <div className="modal-header-icon">
                  <MdClose onClick={() => closeModal()} style={{fontSize: '20px', cursor: 'pointer'}}/>
               </div>
            </div>
            <form onSubmit={onSubmit}>
               <div className="form-control">
                  <label htmlFor="text">Text</label>
                  <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Please enter text" />
               </div>
               <div className="form-control">
                  <label htmlFor="amount">
                     Amount - (negative - expense, positive - income)
                  </label>
                  <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Please enter an amount" />
               </div>
               {
                  showError ? 
                     <h5>Please input the description and amount!</h5>
                  : null
               }
               <button className="btn">Submit</button>
            </form>
         </Modal>
         {/* </Popup> */}
      </div>
   )
}
