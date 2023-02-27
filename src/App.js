import { useState } from 'react'
import TodoForm from './components/TodoList/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = (text) => {
		return setTodos([...todos, text])
	}

	const deleteTodoHandler = (index) => {
		return setTodos(todos.filter((_, idx) => idx !== index))
	}

	return (
		<div className="App">
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} deleteTodo={deleteTodoHandler} />
		</div>
	)
}

export default App
