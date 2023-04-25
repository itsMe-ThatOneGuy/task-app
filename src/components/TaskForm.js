import { useState } from "react";

const TaskForm = (props) => {
	const [buffer, setBuffer] = useState({ ...props.task });

	const handleChange = (key, value) => {
		setBuffer((buffer) => {
			return { ...buffer, [key]: value };
		});
	};

	const onSubmitTask = () => {
		props.addToTaskList(buffer);
		props.handleButtonClick();
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					onSubmitTask();
				}}>
				<label htmlFor="taskInput">Task</label>
				<input
					onChange={(e) => {
						handleChange("text", e.target.value);
					}}
					type="text"
					value={buffer.text}></input>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default TaskForm;
