import React from 'react';
import './endPag.css'
import imgFacebook from './imgs/ico_facebook.png'
import imgTwitter from './imgs/ico_twitter.png'

export default function Footer(props){
    return(
        <>
            <div>
                <div className = 'iconesMedia'>
                    <div className = 'informes'>
                        <a href="localhost:3000/endpag">CENTRAL DE AJUDA</a>
                        <a href="localhost:3000/endpag">DICAS DE SEGURANÇA</a>
                        <a href="localhost:3000/endpag">SOBRE NÓS</a>
                        <a href="localhost:3000/endpag">MÉTODOS DE PAGAMENTO</a>
                        <a href="localhost:3000/endpag">SUGESTÃO</a>
                    </div>
                    <div>SIGA-NOS  </div>
                    <div><img src={imgFacebook} alt="facebook" /></div>
                    <div><img src={imgTwitter} alt="twitter" /></div>
                </div>
                <div className = 'footer'>
                    <h4>Projeto Engenharia Software</h4>
                    <h5>{props.email}</h5>
                    <h6> TEMPLATE - {props.nome} ® - 2021 </h6>     
                </div>
            </div>

        </>
    )
}