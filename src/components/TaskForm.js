import { useState } from "react";

const TaskForm = (props) => {
	const [buffer, setBuffer] = useState({ ...props.task });

	const handleChange = (key, value) => {
		setBuffer((buffer) => {
			return { ...buffer, [key]: value };
		});
	};

	return (
		<div>
			<form>
				<label htmlFor="taskInput">Task</label>
				<input
					onChange={(e) => {
						handleChange("text", e.target.value);
					}}
					type="text"
					value={buffer.text}></input>
			</form>
		</div>
	);
};

export default TaskForm;
