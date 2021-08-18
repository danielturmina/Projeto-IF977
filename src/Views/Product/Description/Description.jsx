import React from "react";
import './style.css'

const Description = (props) => {
    return( 
        <React.Fragment>
        <h2>Descrição</h2>

        <p>
          {props.descricao}
        </p>   
        
        </React.Fragment>       
                  
    );

};

export default Description;