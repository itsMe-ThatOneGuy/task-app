import { useState } from "react";

const TaskForm = (props) => {
	const [buffer, setBuffer] = useState({
		...props.task,
	});

	const handleChange = (key, value) => {
		setBuffer((buffer) => {
			return { ...buffer, [key]: value };
		});
	};

	const onSubmitTask = () => {
		if (buffer.text === "") {
			return;
		} else {
			props.addToTaskList(buffer);
			props.handleAddButtonClick();
		}
	};

	return (
		<div>
			<form
				onSubmit={(e) => {
					console.log(buffer);
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
