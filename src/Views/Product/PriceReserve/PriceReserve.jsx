import React, {useState} from "react";
import './style.css'
import { HiOutlineHeart } from "react-icons/hi"
import Calendar from "../Calendar/calendar";

const PriceReserve = () => {
  const [numberSelected, setNumberSelected] = useState(2);
  



  return( 
        <React.Fragment>
          <div className = "containerPrice">
            <div className = "titlePrice">
                  <h1>Bateria Acústica Premium</h1>
                  <div className="heart"><HiOutlineHeart size="20px" /></div>
                </div>
                <div className = "delivery">Realizo Entrega</div>
                <div className = "price">
                    <h3>Valor Diário</h3>
                    <h2>R$ 50</h2>
            </div>
            <div className = "calendarPrice">
            <Calendar onSelect={(e) => {setNumberSelected(e)}}/> 
            <div>{numberSelected*10}</div>
            </div>
            <div className = "availability">
                <button>Verificar Disponibilidade</button>
            </div>

            
                
            
          </div>
       </React.Fragment> 

    );

};

export default PriceReserve;