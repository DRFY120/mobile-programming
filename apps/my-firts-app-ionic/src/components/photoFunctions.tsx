import { useCallback } from 'react';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

export const usePhotoFunctions = () => {
  const { takePhoto, deletePhoto } = usePhotoGallery();

  const handleDeletePhoto = useCallback((selectedPhoto: UserPhoto | null, setGalleryPhotos: React.Dispatch<React.SetStateAction<UserPhoto[]>>, closePhotoModal: () => void) => {
    if (selectedPhoto) {
      // Delete the photo from the gallery
      deletePhoto(selectedPhoto);
      // Update the state without the deleted photo
      setGalleryPhotos((prevPhotos) => prevPhotos.filter((p) => p !== selectedPhoto));
      // Close the modal
      closePhotoModal();
    }
  }, [deletePhoto]);

  const handleTakeNewPhoto = useCallback(async (selectedPhoto: UserPhoto | null, setGalleryPhotos: React.Dispatch<React.SetStateAction<UserPhoto[]>>, closePhotoModal: () => void) => {
    const newPhoto = await takePhoto();
    if (newPhoto!) {
      // Delete the old photo from the gallery
      if (selectedPhoto) {
        deletePhoto(selectedPhoto);
      }
      // Update the state with the new photo
      setGalleryPhotos((prevPhotos) =>
        prevPhotos.map((p) => (p === selectedPhoto ? newPhoto : p))
      );
      // Close the modal
      closePhotoModal();
    }
  }, [takePhoto, deletePhoto]);

  return { handleDeletePhoto, handleTakeNewPhoto };
};
