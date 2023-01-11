import React from "react";
import Card from "./Card";

function DoneImg(props) {
    if (props.done) {
        return (<img src="./assets/doneon.png" alt="done"></img>)
    } else {
        return (<img src="./assets/doneoff.png" alt="undone"></img>)
    }
}

function ListItem(props) {



    return (


        < li id={props.item.id} >
            <Card className={props.item.done ? "done item" : "item"}>
                <div> {props.item.text}</div>
                <div>
                    <button onClick={() => props.onDone(props.item)}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={() => props.onItemDeleted(props.item)}><img style={{ width: '100%', height: '100%' }} src="./assets/bin.png" alt="deletea"></img> </button>
                </div>
            </Card>
        </li >

    )
}

export default ListItem

