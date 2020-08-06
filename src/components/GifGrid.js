import React from 'react';
import GifGridItem from './GifGridItem';

import { useGifFetch } from '../hooks/useGifFetch';
const GifGrid = ({category}) => {

    /* const [images, setImages] = useState([]);
    
    useEffect(() => {
        //Llamado de la función para obtener los resultados del api
       getGifs(category)
        //se actualiza el estado con los datos obtenidos
            .then(setImages);
    }, [category]); */

    const {data, loading} = useGifFetch(category);
 

    return (
        <div>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>
            <div className="row row-cols-1 row-cols-md-4">
                {loading && <p className="loading animate__animated animate__zoomIn">Cargando..</p>}
                {
                   //se mapea el estado, obteniendo todos los registros que en el se contiene 
                    data.map( img => (
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
