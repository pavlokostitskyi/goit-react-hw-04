import css from "./ImageCard.module.css"
 
const ImageCard = ({ image, onImageClick }) => {
  const { urls, alt_description } = image;
 
    
  return (
    <li className={css.ImageCard}>
      <div onClick={() => onImageClick(urls.regular)}>
        <img src={urls.small} alt={alt_description} />
      </div>
    </li>
  );
};

export default ImageCard;