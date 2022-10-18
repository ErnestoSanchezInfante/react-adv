import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';



export const useShoppingCart = () => {
 //asi ya no se necesita inicializar, especificando el objeto ya sabe de que se trata
   const [ shoppingCart, setShoppingCart ] = useState<{[key:string]: ProductInCart}>({});

    const onProductCountChange = ({ count, product }:{ count: number, product: Product }) => {

    setShoppingCart( oldShoppingCart =>{

        if(count === 0 ){

          const { [product.id ]: toDelete, ...rest } = oldShoppingCart;

          return rest 
        }

        return{
          ...oldShoppingCart,
          [ product.id ] : { ...product, count }
        }
    })

    }
    return {
        shoppingCart,

        onProductCountChange,
    }
}
