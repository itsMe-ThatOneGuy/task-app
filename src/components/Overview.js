import { useState, useEffect } from "react";
import TaskForm from "./TaskForm";

const Overview = (props) => {
	const [editing, setEdit] = useState(true);

	const handleEditButtonClick = () => {
		!editing ? setEdit(true) : setEdit(false);
	};

	return (
		<ul>
			{props.taskList.map((task) => {
				return (
					<li key={task.id}>
						<div>
							{task.taskNumber} {task.text}
							<button>Delete</button>
							<button onClick={() => handleEditButtonClick}>
								Edit
							</button>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Overview;
