import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

//Iniciio de compund component pattern
export const ProductImage = ({ img = '' }) => {

    const { product } = useContext( ProductContext );
    let imgToShow: string; //let porque se va a cambiar el valor

    if( img ){
        imgToShow = img;
    } else if ( product.img ) {
        imgToShow = product.img
    } else {
        imgToShow = noImage;
    }

    return(
        <img className={  styles.productImg } src={ imgToShow } alt="Product" /> 
    )
}