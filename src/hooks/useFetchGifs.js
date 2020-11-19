import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

   // componente renderizado por primera vez
    useEffect( () => {
        
        getGifs(category)
            .then(imgs => {
                console.log("imgs",imgs);
                setState({
                    data: imgs,
                    loading: false
                });                
            })
    }, [category]);

   

    return state;
}
