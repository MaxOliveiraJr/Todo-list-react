import React from "react";

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

            <li className={item.done ? "done" : ""} style={{ display: 'flex', alignItems: 'center' }} key={item.id} id={item.id}> {item.text}

                <button style={{ width: '28px', padding: '0', backgroundColor: 'white', border: 'none' }} onClick={() => props.onDone(item)}><DoneImg done={item.done}></DoneImg></button>
                <button style={{ width: '28px', padding: '0', backgroundColor: 'white', border: 'none' }} onClick={() => props.onItemDeleted(item)}><img style={{ width: '100%', height: '100%' }} src="./assets/bin.png" alt="deletea"></img> </button>
            </li>
        ))}
    </ul>)
}

export default List

