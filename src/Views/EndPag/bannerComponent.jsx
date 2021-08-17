import React from "react";
import './endPag.css'
import fotoUsuario from './imgs/ico_perfil.png' //props
import imgProduto from './imgs/img_n_disp.png' //props

export default function BannerComponent(props){
    return(
        <>
            <div className = 'banner'> 
                <div className = 'foto'>
                    <img src={props.imagem} alt="foto_produto" style={{ width: '100%', height: '100%' }}/>
                </div>
                <div className = 'nomeProduto'> Nome de Produto: {props.produtoNome} </div>
                <div className = 'precoProduto'> R$ {props.bannerPreco} </div>
                <div className = 'divInformante'> 
                    <div>
                        <div className = 'fotoInformante'>
                            <img src={fotoUsuario} alt="foto_fulano" />
                        </div>
                        <p className = 'pDivInformante'>Usuário: {props.usuario}</p>
                    </div>
                    
                    <button className = 'alugarButton'><div>Link</div></button>  
                </div>
            </div>
        </>

    )
}