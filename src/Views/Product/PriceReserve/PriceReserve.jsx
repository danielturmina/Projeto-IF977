import React, {useState} from "react";
import './style.css'
import { HiOutlineHeart, HiHeart } from "react-icons/hi"
import Calendar from "../Calendar/calendar";

const price = 50
function ChangeIcone({status}) {
  const [ico, setIco] = useState(status);  
  return (   
    <div>
       <button className="heart" onClick={e => setIco(!ico)}>
         {ico? (<HiOutlineHeart size={20}/>)
              : (<HiHeart size={20}/>)}     
      </button>
    </div>
  )};

function PriceReserve() {
  return( 
        <React.Fragment>
          <div className = "containerPrice">
            <div className = "titlePrice">
                  <h1>Bateria Acústica Premium</h1>
                  <div><ChangeIcone status={true}/></div>
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