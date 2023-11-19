import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonModal, IonButton, IonIcon, IonButtons, IonBackButton } from '@ionic/react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';
import './Tab3.css';
import { useEffect, useCallback } from 'react';
import { usePhotoFunctions } from '../components/photoFunctions'; 

const Tab3: React.FC = () => {
  const { photos} = usePhotoGallery();
  const [galleryPhotos, setGalleryPhotos] = useState<UserPhoto[]>([]);
  const [selectedPhoto, setSelectedPhoto] = useState<UserPhoto | null>(null);

  useEffect(() => {

    setGalleryPhotos(photos);
  }, [photos]);

  const openPhotoModal = useCallback((photo: UserPhoto) => {
    setSelectedPhoto(photo);
  }, []);

  const closePhotoModal = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const { handleDeletePhoto, handleTakeNewPhoto } = usePhotoFunctions();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="grid-container">
          {galleryPhotos.map((photo, index) => (
            <IonImg key={index} src={photo.webviewPath} onClick={() => openPhotoModal(photo)} />
          ))}
        </div>

        <IonModal isOpen={!!selectedPhoto} onDidDismiss={closePhotoModal}>
          <IonContent>
            <IonImg src={selectedPhoto?.webviewPath} />
            <IonButton onClick={() => handleDeletePhoto(selectedPhoto, setGalleryPhotos, closePhotoModal)}>
              Eliminar
            </IonButton>
            <IonButton onClick={() => handleTakeNewPhoto(selectedPhoto, setGalleryPhotos, closePhotoModal)}>
              Actuazliar
            </IonButton>
            <IonButton onClick={closePhotoModal}>
              Cerrar
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;