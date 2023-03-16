
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [] );
    
    const onAddCategory = (newCategory) => {

        if( categories.includes(newCategory) ) return;

        // categories.push(newCategory)

        //Usando el operador spread podemos agregar una categoria teniendo en cuenta las anteriores puestas, sin emnargo esto viola el hecho que no hay una key unica:
        setCategories([ newCategory, ...categories  ]);
        // setCategories([  newCategory, ...categories ]);
        
    };

    return (

        <>
            <h1>GifExpertApp</h1>
        

            <AddCategory 
                onNewCategory = { event => onAddCategory(event) }
            />

            {    
            categories.map( (category) => (
                    <GifGrid key={category} category={ category } /> 
                )) 
            }   
            
        </>

    )

}