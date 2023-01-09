import React from "react";
import "./Todo.css"

function Todo() {

    return (
        <div className="container">
            <h1>
                Todo
            </h1>
            <form action="">
                <input type="text"></input>

                <button type="submit" className="">Add</button>

            </form>
            <ul>
                <li>
                    Item
                </li>
            </ul>
        </div>
    )
}

export default Todo;