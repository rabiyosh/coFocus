import React, { useEffect, useState } from "react";
import Inputs from "@/shared/ui/Input/Inputs";
import Button from "../../shared/ui/Button/Button";

function Todo() {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [todos, setTodos] = useState(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        return savedTodos || [];
    });
    (useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }),
        [todos]);

    function addTodos() {
        if (title.trim() === "" && text.trim() === "") return;
    }

    const time = new Date().toLocaleDateString("ru-RU");

    return (
        <div>
            <h1>
                TODAY <span>{time}</span>{" "}
            </h1>
            <Inputs
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task's title"
                className=" title_input"
            />
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter task "
                className=" task_textarea"
            ></textarea>
            <Button className="submit_button">Submit</Button>
        </div>
    );
}

export default Todo;
