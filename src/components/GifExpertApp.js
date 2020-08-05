import React, {useState} from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () =>{

    //const  categories = ['Naruto', 'Harry Potter', 'Friends', 'Last Airbender'];

    const [categories, setCategories] = useState([]);

    /* const handleAdd = () =>{
        //setCategories([...categories, 'SKN']);
        setCategories(cat => [...categories, 'SKN']);        
    } */

    return(
        <>
            <h2> GifExpertApp</h2>
            <hr/>            
            <AddCategory setCategories = {setCategories}/>

            {/*<button type="button" className="btn btn-primary" onClick={handleAdd}>Agregar</button>*/}

            <ol>
                {
                    categories.map((category, i) =>
                        <GifGrid  
                            key = {category}
                            category = {category}/>
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;