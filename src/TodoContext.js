import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export function TodoProvider(props){

    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    return(
        <TodoContext.Provider value={{ items, setItems, text, setText }} >
            {props.children}
        </TodoContext.Provider>
    )
}