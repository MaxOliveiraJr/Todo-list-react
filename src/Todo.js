import React, { useEffect, useState } from "react";
import Item from "./components/Item"
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import "./Todo.css"
import Modal from "./components/Modal";

const SAVED_ITEMS = "savedItems"

function Todo() {
    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            setItems(savedItems);
        }
    }, [])

    useEffect(() => {

        if (items.length > 0) {
            localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
        }

    }, [items])

    function onAddItem(text) {


        let it = new Item(text);

        setItems([...items, it])
    }

    function onItemDeleted(item) {
        let filteredItem = items.filter(it => it.id !== item.id)

        setItems(filteredItem);
    }

    function onDone(item) {

        console.log(item)
        let updateItems = items.map(it => {

            if (it.id === item.id) {

                it.done = !it.done
            }
            return it;
        })

        setItems(updateItems);
    }

    return (
        <div className="container">
            <header>
                <h1>
                    Todo
                </h1>
                <button className="addButton" onClick={() => setShowModal(true)}>
                    +
                </button>
            </header>


            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>
            {showModal && <Modal closedModal={setShowModal}> <TodoForm onAddItem={onAddItem}></TodoForm></Modal>}
        </div>
    )
}

export default Todo;
