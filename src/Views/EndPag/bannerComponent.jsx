import React from "react";
import './endPag.css'
import fotoUsuario from './imgs/ico_perfil.png' //props
import imgProduto from './imgs/img_n_disp.png' //props

export default function BannerComponent(props){
    return(
        <>
            <div className = 'banner'> 
                <div className = 'foto'>
                    <img src={imgProduto} alt="foto_produto"/>
                </div>
                <div className = 'nomeProduto'> Nome de Produto: - Titulo do nome do Produto --- props </div>
                <div className = 'precoProduto'> R$ {props.bannerPreco} </div>
                <div className = 'divInformante'> 
                    <div>
                        <div className = 'fotoInformante'>
                            <img src={fotoUsuario} alt="foto_fulano" />
                        </div>
                        <a href="http://localhost:3000/Profile/">NickUsuário - Bairro</a>
                    </div>
                    
                    <button className = 'alugarButton'><div>Link</div></button>  
                </div>
            </div>
        </>

    )
}