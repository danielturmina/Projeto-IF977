import React from "react";
import DrumsKit from "./Images/drumsKit.jpg"
import Description from "./Description/Description";
import Warranty from "./Warranty/Warranty";
import LocatorInfo from "./LocatorInfo/LocatorInfo";
import PriceReserve from "./PriceReserve/PriceReserve";
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
                    <div className="price-availability"><PriceReserve/></div>
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


export default Product;


