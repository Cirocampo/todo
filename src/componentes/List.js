import React, { useContext } from "react";
import Card from "./Card";
import Lixo from './images/lixo.png'
import On from './images/on.PNG'
import Off from './images/off.PNG'
import { TodoContext } from '../TodoContext';



function List(){

    const {items, setItems} = useContext(TodoContext);

    function deleteItem(item){
       let filteredItems = items.filter(it=> it.id != item.id);
       setItems(filteredItems)  
    }

    function doneItem(item){
        let updatedItems = items.map((it)=>{
            if(it.id === item.id){
                it.done = !it.done
            }
            return it
        })
        setItems(updatedItems);
    }

    return(
        <ul>
            {items.map(item => <li className={item.done? "done" : ""} key={item.id}>
                <Card> 
                    {item.text}
                    <button className="button_img"><img className="img" src={item.done? On : Off} onClick={()=>{doneItem(item)}}></img></button>
                    <button className="button_img"><img className="img" onClick={()=>{deleteItem(item)}} src={Lixo}></img></button>
                </Card> 
            </li>)}
        </ul>
    )
}

export default List;