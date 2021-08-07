import React from "react";
import DrumsKit from './drumsKit.jpg'
//import { IconName } from "react-icons/hi";

import './style.css'

const Product = () => {
    return (   

        <div className="container">
            <div className="row">
                <a className ="a1" href="W">Compartilhar</a> { /* VER CAMINHO */'' }
                <a className ="a2" href="W">Anunciar uma igual</a> { /* VER CAMINHO */'' }
                </div> 
                <div className="panel">
                <div className="coluna">
                    <div className="image">
                        <img className="product-img" alt="drumskit" src={DrumsKit}></img>
                    </div>
                    <div className="description">
                            <Description /> 
                    </div>           
                </div>
                <div className="coluna">
                    <div className="price-availability">
                        <PriceAval />
                    </div>
                    <div className="saler-info">
                        
                    </div>
                </div>
            </div>
        </div>
        
            


    );
};

const Description = () => {
    return( 
        <React.Fragment>
        <h2>Descrição</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et dolor
          bibendum diam ullamcorper bibendum vitae a ex. Ut in ipsum lacus. Nullam
          dictum nisi sem, sed sagittis arcu ultricies ut. Mauris sodales nisl
          velit. Mauris quis velit at urna bibendum viverra. Pellentesque sodales
          laoreet nunc, et blandit libero lobortis eget. Pellentesque pellentesque
          sed mauris dictum porttitor.
          <br />
          <br />
          Itens inclusos: <br />
          - 1x LED <br />
          - 1x LED <br />
          - 1x LED <br />
          - 1x LED <br />
          - 1x LED <br />
          <br />
          Etiam semper a dui ac lacinia. Curabitur at nisi ut urna aliquet
          venenatis. Nullam eget leo nec lectus euismod finibus vel in enim. Vivamus
          sollicitudin nisi est, cursus rhoncus orci finibus in. Cras volutpat
          sodales neque. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Donec imperdiet lorem a efficitur viverra.
          Donec consectetur orci id ex sollicitudin vulputate. Nulla eget sapien
          tortor. Aenean iaculis pellentesque felis, facilisis molestie risus mollis
          non. Proin tempus, nunc non pulvinar tristique, ligula risus porta odio,
          non pulvinar elit nisi vitae velit. Morbi vulputate dolor eu tortor
          iaculis ultricies. Aliquam accumsan aliquam cursus. 
        </p>   
        
        </React.Fragment>       
                  
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


