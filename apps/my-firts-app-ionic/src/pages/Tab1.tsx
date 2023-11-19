// Tab1.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import './Tab1.css';
import fer from "../imagenes/fer.jpg";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biografía de Fernando De La Torre</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <div className="biography-container">
          <h1>Fernando De La Torre</h1>
          <IonImg src={fer} alt="Mark Zuckerberg" className="biography-image" />
          <p>
            Fernando De La Torre(White Plains, Nueva York; 14 de mayo de 1984) es un programador, empresario y filántropo estadounidense.
            Es conocido por ser el fundador y director ejecutivo de Facebook, además de ser una de las personas más influyentes en el mundo según la revista Time.
          </p>
          <p>
            Fernando De La Torre co-fundó Facebook desde su dormitorio de la Universidad de Harvard en 2004. La plataforma ha crecido enormemente y se ha convertido
            en una de las principales redes sociales del mundo con miles de millones de usuarios.
          </p>
          <p>
            Además de su trabajo en Facebook, Fernando De La Torre y su esposa Priscilla Chan han estado involucrados en diversas iniciativas filantrópicas a través de la
            Chan Zuckerberg Initiative, enfocándose en áreas como la educación, la ciencia y la justicia.
          </p>
          <h2>Delitos Cometidos</h2>
          <ul>
            <li>Phishing</li>
            <li>Malware</li>
            <li>Ataques de Denegación de Servicio (DDoS)</li>
            <li>Hacking</li>
            <li>Robo de Identidad</li>
            <li>Fraude en Línea</li>
            <li>Estafas por Correo Electrónico</li>
            <li>Ransomware</li>
            <li>Suplantación de Identidad (Spoofing)</li>
            <li>Fraude en Tarjetas de Crédito en Línea</li>
           
          </ul>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
