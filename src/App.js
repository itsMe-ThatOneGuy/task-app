import { useState } from "react";
import Overview from "./components/Overview";
import TaskForm from "./components/TaskForm";

const App = () => {
	const [taskList, setTaskList] = useState([]);
	const [showForm, setShowForm] = useState(false);

	const addToTaskList = (obj) => {
		setTaskList([...taskList, obj]);
	};

	const updateTaskList = (array) => {
		setTaskList(array);
	};

	const handleButtonClick = () => {
		!showForm ? setShowForm(true) : setShowForm(false);
	};

	return (
		<div className="App">
			<div className="form-container">
				<button
					className="form-button"
					onClick={() => {
						handleButtonClick();
					}}>
					Add Task
				</button>
				{showForm ? (
					<TaskForm
						addToTaskList={addToTaskList}
						handleButtonClick={handleButtonClick}
					/>
				) : null}
			</div>
			<div className="task-list-container">
				<Overview taskList={taskList} />
			</div>
		</div>
	);
};

export default App;

/*
class App extends Component {
	constructor() {
		super();

		this.state = {
			task: { text: "", id: uniqid(), taskNumber: 0 },
			tasks: [],
		};

		this.handleDelete = this.handleDelete.bind(this);
	}

	taskIndex(array) {
		return array.length + 1;
	}

	handleDelete(id) {
		let counter = 1;
		const newTasks = this.state.tasks.filter((task) => task.id != id);
		newTasks.forEach((task) => {
			task.taskNumber = counter;
			counter++;
		});
		this.setState({
			tasks: newTasks,
		});
	}

	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
				taskNumber: this.taskIndex(this.state.tasks),
			},
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		const tasks = this.state.tasks.concat(this.state.task);
		this.setState({
			tasks: tasks,
			task: {
				text: "",
				id: uniqid(),
			},
		});
	};

	render() {
		const { task, tasks } = this.state;

		return (
			<div>
				<form onSubmit={this.onSubmitTask}>
					<label htmlFor="taskInput">Enter task</label>
					<input
						onChange={this.handleChange}
						value={task.text}
						type="text"
						id="taskInput"
					/>
					<button type="submit">Add Task</button>
				</form>
				<Overview tasks={tasks} handleDelete={this.handleDelete} />
			</div>
		);
	}
}

export default App;
*/
