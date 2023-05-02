const Overview = (props) => {
	return (
		<div>
			{props.task.taskNumber} {props.task.text}
			<button>Delete</button>
			<button
				onClick={() => {
					prop.handleEditButtonClick();
				}}>
				Edit
			</button>
		</div>
	);
};

export default Overview;
