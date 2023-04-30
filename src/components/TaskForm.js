import { useState, useEffect } from "react";
import uniqid from "uniqid";

const TaskForm = (props) => {
	const [buffer, setBuffer] = useState({
		text: "",
		id: uniqid(),
		taskNumber: 0,
	});

	const loadBuffer = () => {
		if (props.editing) {
			setBuffer({ ...props.task });
		}
	};

	useEffect(() => {
		loadBuffer();
	}, []);

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
