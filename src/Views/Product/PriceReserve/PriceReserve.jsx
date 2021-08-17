import React from "react";
import './style.css'
import { HiOutlineHeart } from "react-icons/hi"
import Calendar from "../Calendar/calendar";

const price = 50

const PriceReserve = () => {

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
                    <h2>R$ {price}</h2>
            </div>
            <div className = "calendarPrice">
            <Calendar/> 
            </div>
            <div className = "availability">
                <button>Verificar Disponibilidade</button>
            </div>    
            
          </div>
       </React.Fragment> 

    );

};

export default PriceReserve;