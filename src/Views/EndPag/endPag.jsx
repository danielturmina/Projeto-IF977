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
import imgSubir from './imgs/ico_Subir.png'
import BannerComponent from './bannerComponent'
import ReactLoading from 'react-loading';
import firebase from "../../firebase";

export default function Index() {
    const [produtos, setProdutos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [valor, setValor] = useState('generico')

    const ref = firebase.firestore().collection("produtos");
    
    function getProdutos() {
        setIsLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            });
            setProdutos(items);
            setIsLoading(false);
        });
    }

    useEffect(() => {
        getProdutos();
    }, [])

    /*vou tentar organizar e compactar em array as funções abaixo, a ideia é que fique como esse modelo que criei abaixo*/
    const filtroComArraysTentarDepois = (tipo) => {
        var nomesFiltros = ['camping', 'eletronica', 'esportes', 'ferramentas', 'festa', 'musica', 'roupas']
        setValor(nomesFiltros[tipo])
         
    }

    const filtro1 = () => {
        setValor('camping')
    }
    
    const filtro2 = () => {
        setValor('eletronica')
    }

    const filtro3 = () => {
        setValor('esportes')
    }

    const filtro4 = () => {
        setValor('ferramentas')
    }

    const filtro5 = () => {
        setValor('festa')
    }

    const filtro6 = () => {
        setValor('musica')
    }

    const filtro7 = () => {
        setValor('roupa')
    }

    const filtro = () => {
        setValor('generico')
    }

    const rolar = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        }

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
                            <div className = 'iconesRotulo'>
                                <div className = 'imgF' onClick = {filtro1}> <img src={imgCamping} alt="camping" /> </div>
                                <div className = "divRotuloNome" onClick = {filtro1}>Camping</div>
                            </div>
                            <div className = 'iconesRotulo'>
                                <div className = 'imgF' onClick = {filtro2}> <img src={imgEletronicos} alt="eletronicos" /> </div>
                                <div className = "divRotuloNome" onClick = {filtro2}>Eletrônica</div>
                            </div>
                            <div className = 'iconesRotulo'>
                                <div className = 'imgF' onClick = {filtro3}> <img src={imgEsportes} alt="esportes" /> </div>
                                <div className = "divRotuloNome" onClick = {filtro3}>Esportes</div>
                            </div>
                            <div className = 'iconesRotulo'>
                                <div className = 'imgF' onClick = {filtro4}> <img src={imgFerramentas}  alt="ferramentas" /> </div>
                                <div className = "divRotuloNome" onClick = {filtro4}>Ferramentas</div>
                            </div>
                            <div className = 'iconesRotulo'>
                                <div className = 'imgF' onClick = {filtro5}> <img src={imgFesta} alt="festa" /> </div>
                                <div className = "divRotuloNome" onClick = {filtro5}>Festa</div>
                            </div>
                            <div className = 'iconesRotulo'>
                                <div className = 'imgF' onClick = {filtro6}> <img src={imgMusica} alt="musica" />
                                </div>
                                <div className = "divRotuloNome" onClick = {filtro6}>Musica</div>
                            </div>
                            <div className = 'iconesRotulo'>
                                <div className = 'imgF' onClick = {filtro7}> <img src={imgRoupas} alt="roupas" /> </div>
                                <div className = "divRotuloNome" onClick = {filtro7}>Roupas</div>
                            </div>
                            <div className = 'iconesRotulo limpaFiltro'>
                                <div className = "divRotuloNome" onClick = {filtro}>Limpar Filtro</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'meio'>
                    {isLoading ? (
                        <ReactLoading color="#cc0041" />
                    ) : (
                        <>
                            {produtos.map((produto) => (produto.tipo.includes(valor) ?((<BannerComponent key={produto.id} imagem={produto.imagem} descricao={produto.descricao} produtoNome={produto.nome.toUpperCase()} bannerPreco={produto.preco} usuario={produto.usuario}/>)) : console.log('')))}
                        </>
                    )}

                </div>

                <div className = 'botaoRolar' onClick = {rolar}>
                        <div><img src={imgSubir} alt="" /></div>
                </div>
                
            </div>
        </>
    )
}
