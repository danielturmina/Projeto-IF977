import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import DrumsKit from "./Images/drumsKit.jpg"
import Description from "./Description/Description";
import Warranty from "./Warranty/Warranty";
import LocatorInfo from "./LocatorInfo/LocatorInfo";
import PriceReserve from "./PriceReserve/PriceReserve";
import UsersComments from "./UsersComments/UsersComments"
import './style.css'
//import { IconName } from "react-icons/hi";

const Product = (props) => {
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
                            <img className="product-img" alt="drumskit" src={props.location.state.props.imagem}></img>
                        </div>
                        <div className="description"><Description descricao={props.location.state.props.descricao} /></div>           
                    </div>
                    <div className="coluna2">
                    <div className="price-availability"><PriceReserve nome={props.location.state.props.produtoNome} preco={props.location.state.props.bannerPreco} /></div>
                    <div className="locator-info"><LocatorInfo /></div> 
                    <div className="warranty"><Warranty /></div>                   
                    <div className="warranty"><Warranty /></div>
                    <div className="warranty"><Warranty /></div>
                    </div>
                </div>
                <div className="product-page-comments-container">
                    <UsersComments />
                </div>
        </div>
        </section>
            


    );
};


export default withRouter(Product);


