import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './style.css';

function Calendar(props) {
  const [value, onChange] = useState([new Date(), new Date()]);
  const price = props.preco
  var calculate = 0
  function calculateDay(value) {
    if (value === null) {
      return 0
   } else {
      if (value[1].getTime() === value[0].getTime()){
        return 1
      } else {
          const value1 = (value[1]).getTime()
          const value2 = (value[0]).getTime()
          const calculate = Math.round((value1-value2)/87399999)
          return calculate}
  }};
  function calculateTotal(calculate,price) {
    const total = calculate*price
    return total
  };


  return (
    <div className= "calendar">
      <DateRangePicker
        onChange={onChange}
        value={value}
        />
      <div className= "dias">Quantidade de dias selecionados:
        {calculate = calculateDay(value)}
      </div>
      <div className= "valueTotal">Valor Total: R$
        {calculateTotal(calculate,price)}
      </div>
    </div>
  );
}

export default Calendar