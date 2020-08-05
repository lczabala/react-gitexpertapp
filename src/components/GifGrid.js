import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import {getGifs} from '../helpers/getGifs';
const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);
    
    useEffect(() => {
        //Llamado de la función para obtener los resultados del api
       getGifs(category)
        //se actualiza el estado con los datos obtenidos
            .then(setImages);
    }, [category]);

    return (
        <div>
            <h3> {category} </h3>
            <div className="row row-cols-1 row-cols-md-4">
                {
                   //se mapea el estado, obteniendo todos los registros que en el se contiene 
                   images.map( img => (
                     <GifGridItem 
                        key= {img.id} 
                        //Se puede enviar de forma desestructurada. En el componente que recibe se detalla los elementos por separado
                        {...img}/>                         
                   ))
                }
            </div> 
        </div>
    )
}

export default GifGrid;
