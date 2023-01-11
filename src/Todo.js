import React, { useState } from "react";
import Item from "./components/Item"
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import "./Todo.css"

function Todo() {
    const [items, SetItems] = useState([]);

    function onAddItem(text) {


        let it = new Item(text);

        SetItems([...items, it])
    }

    function onItemDeleted(item) {
        let filteredItem = items.filter(it => it.id !== item.id)

        SetItems(filteredItem);
    }

    function onDone(item) {

        console.log(item)
        let updateItems = items.map(it => {

            if (it.id === item.id) {
                
                it.done = !it.done
            }
            return it;
        })

        SetItems(updateItems);
    }

    return (
        <div className="container">
            <h1>
                Todo
            </h1>

            <TodoForm onAddItem={onAddItem}></TodoForm>

            <List onDone={onDone} v onItemDeleted={onItemDeleted} items={items}></List>

        </div>
    )
}

export default Todo;
