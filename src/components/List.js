import React from "react";
import Card from "./Card";

function DoneImg(props) {
    if (props.done) {
        return (<img src="./assets/doneon.png" alt="done"></img>)
    } else {
        return (<img src="./assets/doneoff.png" alt="undone"></img>)
    }
}

function List(props) {



    return (<ul>
        {props.items.map((item) => (

            <li  key={item.id} id={item.id}>
                <Card className={item.done ? "done item" : "item"}>
                    <div> {item.text}</div>
                    <div>
                        <button onClick={() => props.onDone(item)}><DoneImg done={item.done}></DoneImg></button>
                        <button onClick={() => props.onItemDeleted(item)}><img style={{ width: '100%', height: '100%' }} src="./assets/bin.png" alt="deletea"></img> </button>
                    </div>
                </Card>
            </li>
        ))}
    </ul>)
}

export default List

