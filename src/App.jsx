import React, { useState } from 'react'
import Form from './components/forms/Form';
import TodoList from './components/todolist/TodoList';
import { v1 as uuid } from 'uuid'
import toast, { Toaster } from "react-hot-toast"

const App = () => {
    let [state, setState] = useState({
        items: [],
        id: uuid(),
        course: "",
        trainer: "",
    })
    let handleChange = e => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    let handleSubmit = e => {
        e.preventDefault()
        try {
            let newItem = {
                id: state.id,
                course: state.course,
                trainer: state.trainer,
            }
            let updatedItem = [...state.items, newItem];
            console.log(updatedItem);
            setState({
                id: uuid(),
                items: updatedItem,
                course: "",
                trainer: ""
            })
        } catch (error) {
            console.log(error);
        } finally {

        }
    }
    let handleDelete = (id) => {
        let filteredItem = state.items.filter(items => items.id !== id);
        setState({ items: filteredItem })
    }
    let handleUpdate = (id) => {
        let editContent = state.items.filter(items => items.id !== id);
        let selectedItem = state.items.find(items => items.id === id);
        setState({
            items: editContent,
            course: selectedItem.course,
            trainer: selectedItem.trainer,
            id: id,
        })
    }
    return (
        <section id='mainBlock'>
            <article>
                <header>
                    <Toaster />
                    <h1>TodoApp</h1>
                </header>
                <main>
                    <Form course={state.course} trainer={state.trainer} handleChange={handleChange} handleSubmit={handleSubmit} />
                    <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                </main>
            </article>
        </section >
    )
}

export default App

