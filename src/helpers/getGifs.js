export const getGifs = async(category) =>{

    const API_KEY = 'rdmUR3ZkVOqcB7sHyUJd1Azg8aDduo5G';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${ encodeURI(category)}&limit=10`;

    //re recibe la respuesta de la URL consultada
    const resp = await fetch(URL);
    //De la respuesta recibida, se desestructura, quedándinos con la data, luego de convertir a json
    const {data} = await resp.json();

    //Se crea el arreglo final con los datos que nos interesan
    const gifs = data.map(img =>{
        return{
            id: img.id,
            img: img.images.downsized_medium.url,
            title: img.title
        }
    }) 

    console.log(gifs);
    
    return gifs;
}