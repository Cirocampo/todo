import React, { useContext } from "react";
import { TodoContext } from '../TodoContext';
import Item from "./Item";

function Form(){

    const {items, text, setText, setItems} = useContext(TodoContext);

    function saveText(event){
        let t = event.target.value;
        setText(t);
    }

    function addItems(event){

        event.preventDefault()
        if(text){
            setItems([...items, new Item(text)]);
            setText('')
        }

    }

    return(
        <div id="form">
            <div className="barSearch">
                <input onChange={saveText} id="search" type="text" value={text}></input>
                <button className="button" onClick={addItems}>Add</button>
            </div>
        </div>
    )
}

export default Form;