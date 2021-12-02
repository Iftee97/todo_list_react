import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);

    const handleChange = (event) => {
        setItem(event.target.value);
    };

    const handleClick = () => {
        setItems([...items, item]);
        setItem("");
    };

    const deleteItem = (id) => {
        setItems(prevItems => {
            return prevItems.filter((item, index) => index !== id);
        });
    };

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>

            <div className="form">
                <input type="text" onChange={handleChange} value={item} />
                <button onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>

            <div>
                <ul>
                    {
                        items.map((item, index) => (
                            <ToDoItem
                                key={index}
                                id={index}
                                item={item}
                                deleteItem={deleteItem}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default App;
