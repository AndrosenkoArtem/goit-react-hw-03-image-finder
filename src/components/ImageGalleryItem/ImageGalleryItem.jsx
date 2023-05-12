import styles from 'styles.module.css';
export const ImageGalleryItem = ({ images }) => {
  return (
    <>
      {images.map(image => (
        <li className={styles.ImageGalleryItem} key={image.id}>
          <img
            height={260}
            className={styles.ImageGalleryItemImage}
            src={image.webformatURL}
            alt=""
          />
        </li>
      ))}
    </>
  );
};
