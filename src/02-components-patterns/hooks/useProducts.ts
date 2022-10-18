import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs{
    product: Product;
    onChange?:( args: onChangeArgs ) => void;
    value?:number;

}

export const useProducts = ( { onChange, product, value= 0 }: useProductArgs ) => {

    const [ counter, setCounter ] = useState(value);

    const isControlled = useRef(!!onChange);

    const increaseBy = ( value: number ) => {

        if( isControlled.current ){
            return onChange!({ count:value, product }); //Ese signo de ! es para decirle que confie y que ese valor jamas sera nulo
        }

        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue )

        onChange && onChange({ count: newValue, product }); //El operador && no se ejecuta si onChange es falso
    }

    useEffect(() => {
        setCounter( value );
    },[ value ] )

    return {
        counter,
        increaseBy
    }

}
