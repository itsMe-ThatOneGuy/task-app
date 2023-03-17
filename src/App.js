import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
	constructor() {
		super();

		this.state = {
			task: { text: "", id: uniqid(), number: "" },
			tasks: [],
		};

		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(id) {
		this.setState({
			tasks: this.state.tasks.filter((task) => task.id != id),
		});
	}

	handleChange = (e) => {
		this.setState({
			task: {
				text: e.target.value,
				id: this.state.task.id,
				number: this.state.tasks.length + 1,
			},
		});
	};

	onSubmitTask = (e) => {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.task),
			task: { text: "", id: uniqid() },
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
