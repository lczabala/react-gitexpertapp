import React from 'react';

//La prop se envia desestructurada, por tanto, de especifica lo que se quiere utilizar
const GifGridItem = ({title, img}) => {
    return (

        <div className="col mb-6 margin animate__animated animate__zoomIn">
            <div className="card h-100">
                <img src={img} className="card-img-top gif" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>

    )
}

export default GifGridItem;
