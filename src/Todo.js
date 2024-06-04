import React, { useState } from 'react';
import Modal from './componentes/Modal';
import Form from './componentes/Form';
import List from './componentes/List';
import { TodoProvider } from './TodoContext';
import './Todo.css';

function Todo(){

    const [showModal, setShowModal] = useState(true);

    function onHideModal(e){
        let target = e.target;
        if(target.id === "modal"){
            setShowModal(false);
        }
    }

    return(
        <div className='container'>
            <TodoProvider>
                <header className='header'>
                    <h1>Todo</h1>
                    <button onClick={()=>{setShowModal(true)}} className='addButton'>+</button>
                </header>
                <List></List>
                <Modal onHideModal={onHideModal} show={showModal}><Form></Form></Modal>
            </TodoProvider>
    </div>
    )
    
}

export default Todo;