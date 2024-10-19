"use client";
import { createContext, useContext, useEffect, useState } from "react"

export const todosContext = createContext();

export const TaskProvider = ({ children, initialTasks}) => {
    const [todos, setTodos] = useState(initialTasks || []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
             const newTodos = localStorage.getItem('todos');
         
             if(newTodos) {
                 setTodos(JSON.parse(newTodos));
             } else if (initialTasks) {
                setTodos(initialTasks);
                localStorage.setItem('todos', JSON.stringify(initialTasks));
             }
        }
    }, [initialTasks]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);


    const handleAddTask = (title, description, priority) => {
        setTodos((prev) => {
            const newTodos = [
                {
                    id: Math.random().toString(),
                    task: { title, description, priority },
                    completed: false,
                    created: new Date()
                },
                ...prev,
            ];
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        });
    };

    const toggleTodoAsCompleted = (id) => {
        setTodos((prev) => {
            const newTodos = prev.map((task) => {
                if (task.id === id) {
                    return { ...task, completed: !task.completed }
                }
                return task;
            })
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    };

    const handleEdit = (id, title, description, priority) => {
       setTodos((prev) => {
        const newTodos = prev.map((task) => {
            if(task.id === id) {
                return {
                    ...task,
                    task: {title, description, priority},
                };
            }
            return task;
        });
        localStorage.setItem("todos", JSON.stringify(newTodos));
        return newTodos;
       });
    };

    const handleDelete = (id) => {
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            return newTodos;
        })
    };

    return (
        <todosContext.Provider value={{ todos, handleAddTask, toggleTodoAsCompleted,handleEdit, handleDelete }}>
            {children}
        </todosContext.Provider>
    )
}


export const useList = () => {
    const listContextValue = useContext(todosContext)
    if (!listContextValue) {
        throw new Error('UseTodos used outside of provider')
    }
    return listContextValue;
};