

import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithArrays() {
    const [todo, setTodo] = useState({
        id: "1",
        title: "Task 1",
        completed: false,
        description: "Description of Task 1",
    });

    const API = `${REMOTE_SERVER}/lab5/todos`;

    return (
        <div id="wd-working-with-arrays">
            <h2>Working with Arrays</h2>

            <h3>Retrieving Arrays</h3>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos
            </a>
            <hr />

            <h4>Retrieving an Item from an Array by ID</h4>
            <a
                id="wd-retrieve-todo-by-id"
                className="btn btn-primary"
                href={`${API}/${todo.id}`}
            >
                Get Todo by ID
            </a>
            <input
                id="wd-todo-id"
                value={todo.id}
                className="form-control w-50"
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <hr />

            <h3>Filtering Array Items</h3>
            <a
                id="wd-retrieve-completed-todos"
                className="btn btn-primary"
                href={`${API}?completed=true`}
            >
                Get Completed Todos
            </a>
            <hr />

            <h3>Creating New Items in an Array</h3>
            <a
                id="wd-create-todo"
                className="btn btn-primary"
                href={`${API}/create`}
            >
                Create Todo
            </a>
            <hr />

            <h3>Deleting from an Array</h3>
            <a
                id="wd-delete-todo"
                className="btn btn-danger"
                href={`${API}/${todo.id}/delete`}
            >
                Delete Todo with ID = {todo.id}
            </a>
            <hr />

            <h3>Updating an Item in an Array</h3>
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary"
            >
                Update Todo Title
            </a>
            <input
                value={todo.title}
                className="form-control w-50"
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <br />
            <br />

            <h3>Updating Todo's Completed Status</h3>
            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary"
            >
                Mark as {todo.completed ? "Incomplete" : "Completed"}
            </a>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                    setTodo({ ...todo, completed: !todo.completed })
                }
            />
            <br />
            <br />

            <h3>Updating Todo's Description</h3>
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary"
            >
                Update Todo Description
            </a>
            <input
                value={todo.description}
                className="form-control w-50"
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />
            <br />
            <br />
        </div>
    );
}
