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

	const injectEdit = () => {
		let taskList = [...props.taskList];
		const index = taskList.findIndex((e) => e.id === props.task.id);
		taskList.splice(index, 1, buffer);
		props.updateTaskList(taskList);
	};

	const onSubmitTask = () => {
		if (!props.editing) {
			props.addToTaskList(buffer);
			props.handleButtonClick();
		}
		if (props.editing) {
			injectEdit();
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
