import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from 'styles.module.css';

export const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    <ImageGalleryItem images={images} />
  </ul>
);
