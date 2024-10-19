"use client";

import { useState } from 'react'
import { useList } from '../store/task';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(' ');
    const { handleAddTask } = useList();


    const handleCreate = (e) => {
        e.preventDefault();
        handleAddTask(title, description, priority);
        setTitle('');
        setDescription('');
        setPriority('');
    };

    
    return (
        <form onSubmit={handleCreate}>
            <input
                type='text'
                placeholder='title'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type='text'
                placeholder='details'
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select
            className='select'
                required
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button type='submit'>Create</button>
        </form>
    )
};

export default AddTask;