import React, { useState } from "react";
import "./Todo.css"

function Todo() {

    const [text, setText] = useState("");
    const [items, SetItems] = useState([]);

    function handleChange(event) {
        let t = event.target.value;

        setText(t);

    }
    function addItem(event) {
        event.preventDefault();

        if (text) {
            SetItems([...items, text]);
            setText("");
        }
    }

    return (
        <div className="container">
            <h1>
                Todo
            </h1>
            <form action="">
                <input type="text" onChange={handleChange} value={text}></input>
                <button type="submit" className="" onClick={addItem}>Add</button>

            </form>
            <ul>
                {items.map((item, index) => (

                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;