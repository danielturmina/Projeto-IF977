import React, { useState, useEffect } from "react";
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
import imgLogo from './imgs/ico_logo.png'
import BannerComponent from './bannerComponent'
import firebase from "../../firebase";

export default function Index() {
    const [produtos, setProdutos] = useState([]);

    const ref = firebase.firestore().collection("produtos");
    
    function getProdutos() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            });
            setProdutos(items);
        });
    }

    useEffect(() => {
        getProdutos();
    }, [])

    
    const rolar = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        console.log('verificar erro no console')
        }
    /*https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#Example*/

    return (
        
        <>
            <div className = 'principal'>
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
                    {produtos.map((produto) => (
                        <BannerComponent key={produto.id} imagem={produto.imagem} descricao={produto.descricao} produtoNome={produto.nome} bannerPreco={produto.preco} usuario={produto.usuario}/>
                    ))}
                </div>

                <div className = 'botaoRolar'>
                        <button onClick={rolar}>SUBIR</button>
                </div>
            
            </div>

        </>
    )
}
