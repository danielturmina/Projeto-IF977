import React, { useState } from "react";
import './endPag.css'
import imgCarrinho from './imgs/ico_carrinhos.png'
import imgPesquisa from './imgs/ico_pesquisa.png'
import imgCamping from './imgs/ico_camping.png'
import imgMusica from './imgs/ico_musica.png'
import imgRoupas from './imgs/ico_roupas.png'
import imgFesta from './imgs/ico_festa.png'
import imgFerramentas from './imgs/ico_ferramentas.png'
import imgEsportes from './imgs/ico_esportes.png' 
import imgEletronicos from './imgs/ico_eletronicos.png' 
import imgUsuario from './imgs/ico_usuario.png'
import imgLogo from './imgs/ico_logo.png'
import BannerComponent from './bannerComponent'
import FooterComponent from './footer'

export default function Index() {
    
    const [preco, setPreco] = useState(0)
    
    return (
        <>
            <div className = 'filtroProcura'>

                <div className = 'imgLogo'><img src={imgLogo}alt="logo" /></div>
                <div>
                    <div className = 'divBusca'>
                        
                        <input type="text" placeholder = "Em busca de algo pra alugar?" />
                        <a href = "locahost:3000/"  className = "pesquisaButton"><img src={imgPesquisa} alt="pesquisa"/></a>
                        <a href = "locahost:3000/" className = "carrinhoButton"><img src={imgCarrinho}alt="carrinho" /></a>
                    </div>
                    <div className = 'iconesFiltro'>
                        <a href = "localhost:3000/" className = 'iconesRotulo'>
                            <div className = 'imgF'> <img src={imgCamping} alt="camping" /> </div>
                            <div className = "divRotuloNome">Camping</div>
                        </a>
                        <a href = "localhost:3000/" className = 'iconesRotulo'>
                            <div className = 'imgF'> <img src={imgEletronicos} alt="eletronicos" /> </div>
                            <div className = "divRotuloNome">Eletrônica</div>
                        </a>
                        <a href = "localhost:3000/" className = 'iconesRotulo'>
                            <div className = 'imgF'> <img src={imgEsportes} alt="esportes" /> </div>
                            <div className = "divRotuloNome">Esportes</div>
                        </a>
                        <a href = "localhost:3000/" className = 'iconesRotulo'>
                            <div className = 'imgF'> <img src={imgFerramentas}  alt="ferramentas" /> </div>
                            <div className = "divRotuloNome">Ferramentas</div>
                        </a>
                        <a href = "localhost:3000/" className = 'iconesRotulo'>
                            <div className = 'imgF'> <img src={imgFesta} alt="festa" /> </div>
                            <div className = "divRotuloNome">Festa</div>
                        </a>
                        <a href = "localhost:3000/" className = 'iconesRotulo'>
                            <div className = 'imgF'> <img src={imgMusica} alt="musica" />
                            </div>
                            <div className = "divRotuloNome">Musica</div>
                        </a>
                        <a href = "localhost:3000/" className = 'iconesRotulo'>
                            <div className = 'imgF'> <img src={imgRoupas} alt="roupas" /> </div>
                            <div className = "divRotuloNome">Roupas</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className = 'meio'>
                <BannerComponent bannerPreco = {preco}/>
                <BannerComponent bannerPreco = {preco}/>
                <BannerComponent bannerPreco = {preco}/>
                <BannerComponent bannerPreco = {preco}/>
                <BannerComponent bannerPreco = {preco}/>
                <BannerComponent bannerPreco = {preco}/>
            </div>

            <FooterComponent email='ycb@cin.ufpe.br' nome='Yuri Barros' />

        </>
    )
}
