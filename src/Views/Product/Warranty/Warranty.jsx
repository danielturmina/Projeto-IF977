import React from "react";
import './style.css'


const Warranty = () => {
    return(
    <React.Fragment>
        <div className = "warranty-section">
            <h4>Garantia</h4>
        
            <div className = "text">
                <span>
                <p className="title-warranty">Compra Garantida com o Lorem Ipsum</p>
                <p className="description-warranty">
                    Receba o produto que está esperando ou devolvemos seu dinheiro
                </p>
                </span>
                <span>
                <p className="title-warranty">Garantia do vendedor</p>
                <p className="description-warranty">sem garantia</p>
                </span>
            </div>
        
            <a id = "a3" href="/product">Saiba mais sobre garantia</a>
        </div>
    </React.Fragment>
    )
};

export default Warranty;