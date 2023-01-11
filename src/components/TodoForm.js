import React, { useState } from "react";

function TodoForm(props) {


    const [text, setText] = useState("");


    function handleChange(event) {
        let t = event.target.value;

        setText(t);

    }
    function addItem(event) {
        event.preventDefault();

        if (text) {
            props.onAddItem(text)
            setText("");
        }
    }

    return (<form action="">
        <input type="text" onChange={handleChange} value={text}></input>
        <button type="submit" className="" onClick={addItem}>Add</button>

    </form>)
}

export default TodoForm;