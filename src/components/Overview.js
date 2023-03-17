import React from "react";

const Overview = (props) => {
	const { tasks, handleDelete } = props;

	return (
		<ul>
			{tasks.map((task) => {
				return (
					<li key={task.id}>
						{task.text}
						<button onClick={() => handleDelete(task.id)}>Delete</button>
					</li>
				);
			})}
		</ul>
	);
};

export default Overview;
