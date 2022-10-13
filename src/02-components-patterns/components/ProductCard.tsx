import { useProducts } from '../hooks/useProducts';
import styles from '../styles/styles.module.css';

import { createContext, ReactElement, ReducerAction } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';



//esto es para compartir informacion entre padres e hijos
export const ProductContext = createContext({} as ProductContextProps);

const { Provider } =  ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({children, product, className, style }: Props) => {

    const { counter, increaseBy } = useProducts();

  return (
        <Provider value ={{
            counter,
            increaseBy, 
            product
        }}>

            <div 
                className={ `${styles.productCard} ${ className }` }
                style={ style }
            >

                { children }
                
            </div>
        </Provider>
  )
}

