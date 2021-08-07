import React from "react";
import './style.css'
import {HiOutlineChatAlt2, HiOutlineLocationMarker, HiOutlineClock} from "react-icons/hi"

const LocatorInfo = () => {
    return( 
        <React.Fragment>
          <div className = "containerLocator">
              <div className = "titleLocator">Informações sobre o locador</div>
              <div className = "location">
                  <div className = "location1">
                  <p><HiOutlineLocationMarker size="20px"/>Localização</p>
                  <strong>Recife, Pernambuco</strong>
                  </div>
              </div>
              <div className = "reputation">
                <div className = "reputation-list">
                <li id= "li1" />
                <li id= "li2"/>
                <li id= "li3"/>
                <li id= "li4"/>
                <li id= "li5"/>
                </div>
                <div className = "reputation-row">
                  <div className = "reputation-row1">
                    <strong>30</strong>
                    <span>empréstimos nos últimos 6 meses</span>
                  </div>
                  <div className = "reputation-row2">
                    <div className = "msg">
                      <HiOutlineChatAlt2 />
                      </div>
                    <span>Presta um bom atendimento</span>
                  </div>
                  <div className = "reputation-row3">
                    <div className = "clock">
                      <HiOutlineClock />
                    </div>
                    <span>Responde rapidamente</span>
                  </div>
                  </div>
                  <a href="K">Ver mais dados do locador</a>{ /* VER CAMINHO */'' }
              </div>

                    
          
          </div>
       </React.Fragment> 

    );

};

export default LocatorInfo;