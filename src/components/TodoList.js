import { useState } from "react";

const TodoList = () => {
    const[todo, setTodo] = useState(["Einkaufen gehen"]);

    const [input, setInput] = useState("");


    const addTodo = (e) => {
        const inputTodo = document.getElementById('inputTodo');
        setTodo([...todo, inputTodo.value]);
        inputTodo.value = '';
    }


    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.prefentDefault()
    }

    const lineThrough = (elt, checked) => {
        const outputList = document.querySelectorAll('.outputList');
        const output = outputList[elt];
        output.style.textDecoration = checked ? "line-through" : "none";
    }

    const deleteTodo = (elt) => {
        const outputList = document.querySelectorAll(".outputList");
        const output = outputList[elt];
        if (output.style.textDecoration === "line-through") {
            output.style.display = "none";
        }
    }



    return ( 
        <section>
            {todo.map((elt, index) => {
                return (
            <div className="outputList" key={index} > 
                <input 
                type="checkbox" 
                onClick={(event) => lineThrough(index, event.target.checked)}
                />
                <label>{elt}</label>
                <button>
                    <img src="https://cdn-icons-png.flaticon.com/128/542/542724.png" alt="#" className="trash" onClick={() => deleteTodo(index, true)}/>
                </button>
            </div>
            )
            })}

            <form action="" onSubmit={handleSubmit}>
                <input 
                type="text" 
                id="inputTodo" 
                placeholder="Add to do.." 
                onChange={handleChange}/
                >
                <input 
                type="button" 
                value="Submit" 
                id="button" 
                onClick={addTodo}/>
            </form>
        </section>
    );
}

export default TodoList;