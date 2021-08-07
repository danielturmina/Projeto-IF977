import React from "react";
import DrumsKit from "./Images/drumsKit.jpg"
import Description from "./Description/Description";
import Warranty from "./Warranty/Warranty";
import LocatorInfo from "./LocatorInfo/LocatorInfo";
import './style.css'
//import { IconName } from "react-icons/hi";

const Product = () => {
    return (   
        <section className="product">
        <div className="container">
            <div className="row">
                <a className ="a1" href="W">Compartilhar</a> { /* VER CAMINHO */'' }
                <a className ="a2" href="W">Anunciar uma igual</a> { /* VER CAMINHO */'' }
                </div> 
                <div className="panel">
                <div className="coluna1">
                    <div className="image">
                        <img className="product-img" alt="drumskit" src={DrumsKit}></img>
                    </div>
                    <div className="description"><Description /></div>           
                </div>
                <div className="coluna2">
                    <div className="price-availability"><PriceAval /></div>
                    <div className="locator-info"><LocatorInfo /></div> 
                    <div className="warranty"><Warranty /></div>                   
                    <div className="warranty"><Warranty /></div>
                    <div className="warranty"><Warranty /></div>
                </div>
            </div>
        </div>
        </section>
            


    );
};

const PriceAval = () => {
      return(
        <React.Fragment>
            <div className="valor-diaria">
                <h1>Valor Diaria</h1>
            </div>
            <div className="preco-produto">
                <h1>Preco:</h1>
                <h2>R$20.00</h2>
            </div>

            <div className="data-aluguel">
                <h1>Preco:</h1>
                <h2>R$20.00</h2>
            </div>
            <div className="data-entrega">
                <h1>Preco:</h1>
                <h2>R$20.00</h2>
            </div>

        </React.Fragment>

      );
}


export default Product;


