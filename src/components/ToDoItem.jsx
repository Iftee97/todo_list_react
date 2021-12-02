import React from "react";

const ToDoItem = ({ item, deleteItem, id }) => {
    return (
        <div onClick={() => deleteItem(id)}>
            <li>{item}</li>
        </div>
    );
};

export default ToDoItem;
