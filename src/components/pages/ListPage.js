"use client";

import { useState } from "react";
import { useList } from "../store/task";
import { BiEditAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const ListPage = () => {
    const { todos, toggleTodoAsCompleted, handleEdit, handleDelete } = useList();
    const [isEdit, setIsEdit] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [editPriority, setEditPriority] = useState('');
    const [searchBar, setSearchBar] = useState('');
    // const [filterList, setFilterList] = useState('');

    console.log(todos);
    const handleEditTask = (todo) => {
        setIsEdit(todo.id);
        setEditTitle(todo.task.title);
        setEditDescription(todo.task.description);
        setEditPriority(todo.task.priority);
    };

    const saveEdit = (id) => {
        handleEdit(id, editTitle, editDescription, editPriority);
        setIsEdit(null);
    };

    const priorities = {
        high: { value: 1, label: "high" },
        medium: { value: 2, label: "medium" },
        low: { value: 3, label: "low" },
    };

    const sortByPriority = [...todos].sort((first, second) => {
        if (first.completed !== second.completed) {
            return first.completed ? 1 : -1;
        }
        return priorities[first.task.priority].value - priorities[second.task.priority].value;
    });

    const filterBySearch = sortByPriority.filter((todo) => {
        const filterList = searchBar.toLowerCase();
        const title = todo.task.title || '';
        const description = todo.task.description || '';
        return (
            title.toLowerCase().includes(filterList) ||
            description.toLowerCase().includes(filterList)
        );
    });


    return (
        <>
            <div>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search By Title or Details"
                    value={searchBar}
                    onChange={(e) => setSearchBar(e.target.value)} />
            </div>
            <ul>
                {filterBySearch.map((todo) => (
                    <li key={todo.id} className={`task ${priorities[todo.task.priority].label}`}>
                        {isEdit === todo.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    placeholder="Edit Title"
                                />
                                <input
                                    type="text"
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    placeholder="Edit Details"
                                />
                                <select
                                    className="select"
                                    value={editPriority}
                                    onChange={(e) => setEditPriority(e.target.value)}
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                                <button onClick={() => saveEdit(todo.id)}>Save</button>
                                <button onClick={() => setIsEdit(null)}>Cancel</button>
                            </div>
                        ) : (
                            <>
                                <div className="toggle-container">
                                    <div
                                        className={`toggle-btn ${todo.completed ? 'on' : ''}`}
                                        onClick={() => toggleTodoAsCompleted(todo.id)}
                                    ></div>
                                    <span className="toggle-label">
                                        {todo.completed ? 'Completed' : 'Pending'}
                                    </span>
                                    <div className="priority">
                                        {todo.task.priority && <span> {todo.task.priority}</span>}
                                    </div>
                                </div>
                                <div className="flex">
                                    <label htmlFor={`todo-${todo.id}`}>
                                        <h2 className="title">{todo.task.title}</h2>
                                        <p className="details">{todo.task.description && <span>{todo.task.description}</span>}</p>

                                    </label>

                                    <div className="btns">
                                        <span type="button" onClick={() => handleDelete(todo.id)}>
                                            <MdDeleteForever />
                                        </span>
                                        <span type="button" onClick={() => handleEditTask(todo)}>
                                            <BiEditAlt />
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>

        </>
    );
};

export default ListPage;
