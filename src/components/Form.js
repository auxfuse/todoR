import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    className="todo-input"
                    value={inputText}
                    onChange={inputTextHandler}
                />
                <button
                    type="submit"
                    className="todo-button"
                    onClick={submitTodoHandler}
                >
                    <i className="fas fa-plus-square" />
                </button>
                <div className="select">
                    <select
                        className="filter-todo"
                        name="todos"
                    >
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </>
    )
};

export default Form;