import React from "react";
import UserPhoto from './UserPhoto.png'

import './style.css'

const UserProfile = () => {
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
        </section>
    );
};

export default UserProfile;
