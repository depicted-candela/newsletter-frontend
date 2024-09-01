import React from 'react';
import styles from '../styles/ImageWrapper.module.css';

interface ImageWrapperProps {
    src: string;
    alt: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt }) => {
    return (
        <div className={styles['image-container']}>
            <img
                src={src}
                alt={alt}
                className={styles['image-preview']}
            />
        </div>
    );
};

export default ImageWrapper;
