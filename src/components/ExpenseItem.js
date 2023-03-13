import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';
 
function ExpenseItem(props) {
 // const [buttonText, setButtonText] = useState('Click me')
 // const clickHandler = ()=> {
 // console.log('clicked!!!')
 // };fo
 // const btn = document.getElementsByClassName('expense-item')
    
 //for (var i = 0; i < btn.length; i++) {
   // btn[i].addEventListener('click',function (e) {      
      //e.parentNode.parentNode.removeChild(e.parentNode);
   // } , false);
// }//let title= props.title;
//const clickHandler = () => {
  //title = "Updated!";
 // console.log(title)
//};

  return (
    <Card className='expense-item'>
    <ExpenseDate date={props.date} />
    <div className='expense-item__description'>
      <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
  </Card>
);
}


export default ExpenseItem;
