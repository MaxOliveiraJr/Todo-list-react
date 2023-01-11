import React, { useEffect, useState } from "react";
import Item from "./components/Item"
import TodoForm from "./components/TodoForm";
import List from "./components/List";
import "./Todo.css"

const SAVED_ITEMS = "savedItems"

function Todo() {
    const [items, SetItems] = useState([]);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if (savedItems) {
            SetItems(savedItems);
        }
    }, [])

    useEffect(() => {

        if (items.length > 0) {
            localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
        }

    }, [items])

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
