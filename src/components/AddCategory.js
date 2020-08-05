import React, {useState} from 'react';
import PropsTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        //Permite tomar el valor que está en el input, cada vez que este cambia
        //de forma que se pueda tener el estado actualizado con lo que se escriba
        setInputValue(e.target.value);
    }

    const handleSumit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            //Actualizo el estado, agregando una nueva categoría a las ya buscadas
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }   
    }

    return (
        <>
            <h5>Add Category</h5>
            <form onSubmit={handleSumit}>
                <div className="input-group mb-3">                
                    <input 
                        type="text" 
                        id="AddCategory" 
                        value={inputValue}
                        onChange = {handleInputChange}
                        className="form-control" 
                        placeholder="Agregar al listado" 
                    />
                </div>
            </form>   
        </>
    )
}

AddCategory.PropsTypes = {
    setCategories: PropsTypes.func.isRequired
}

export default AddCategory;
