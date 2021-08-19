import React, {useState, useEffect} from "react";
import UserPhoto from './UserPhoto.png';
import ReactLoading from 'react-loading';
import firebase from "../../firebase";


import './style.css'

const UserProfile = () => {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  return (
      <section className="user-profile-section">
        <div className="user-profile-card">
          <h2 className="user-profile-title">Meu Perfil</h2>
            <img className="user-profile-photo" alt="my-profile" src={UserPhoto}></img>
          <div className="user-profile-informations">
              <p className="user-profile-description">Nome: Giovani Albuquerque</p>
              <p className="user-profile-description">Endereço: Pernambuco, Recife, San Martin</p>
              <p className="user-profile-description">Descrição: Gosto muito de programar e assistir seriados.</p>
          </div>
        </div>
        <div className="user-profile-annoucement-card">
          <h2 className="user-profile-annoucement-title">Meus Anúncios</h2>
  
          <div style={{ paddingLeft: '18px', paddingBottom: '10px', width: '100%', height: '480px', overflowY: 'scroll' }}>
            <div className = "user-profile-annoucement-container">
              {isLoading? (
                  <ReactLoading className="loading-component" color="#cc0041" />
              ) : (
                <>
              {produtos.map((produto) => (
                  <div className="user-profile-annoucement-items" key={produto.id}>
                    <img src={produto.imagem} width="100%" height="100%" style={{borderRadius: '10px'}} alt="" />
                  </div>
                ))}
                {produtos.map((produto) => (
                  <div className="user-profile-annoucement-items" key={produto.id}>
                    <img src={produto.imagem} width="100%" height="100%" style={{borderRadius: '10px'}} alt="" />
                  </div>
                ))}
                {produtos.map((produto) => (
                  <div className="user-profile-annoucement-items" key={produto.id}>
                    <img src={produto.imagem} width="100%" height="100%" style={{borderRadius: '10px'}} alt="" />
                  </div>
                ))}
                {produtos.map((produto) => (
                  <div className="user-profile-annoucement-items" key={produto.id}>
                    <img src={produto.imagem} width="100%" height="100%" style={{borderRadius: '10px'}} alt="" />
                  </div>
                ))}
                {produtos.map((produto) => (
                  <div className="user-profile-annoucement-items" key={produto.id}>
                    <img src={produto.imagem} width="100%" height="100%" style={{borderRadius: '10px'}} alt="" />
                  </div>
                ))}
                </>
              )}
                
            </div>
          </div>
        </div>
      </section>
  );
};

export default UserProfile;
