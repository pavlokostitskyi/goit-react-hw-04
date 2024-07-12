import  { useEffect } from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');  

const ImageModal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target.className.includes('overlay')) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={!!largeImageURL}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.imageModal}
      overlayClassName={styles.overlay}
      onClick={handleOverlayClick}
    >
      <img src={largeImageURL} alt="" className={styles.modalImage} />
    </Modal>
  );
};

export default ImageModal;