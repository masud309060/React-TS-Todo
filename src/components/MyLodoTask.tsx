import React from "react";
import styles from "../styles/MyTodoTask.module.scss";

type taskType = {
	id: string;
	category: string;
	task: string;
	checked: boolean;
};

interface Iprops {
	selectedTask: taskType[];
	hadleTaskCheck: (id: string) => void;
	deleteTask: (id: string) => void;
}

const MyLodoTask = ({ selectedTask, hadleTaskCheck, deleteTask }: Iprops) => {
	return (
		<div className={styles.my_todo_task}>
			<header>
				<h3>{selectedTask && selectedTask[0]?.category}</h3>
				<small>{selectedTask?.length} task remaining</small>
			</header>
			<div className={styles.todo_task_grp}>
        
				{ selectedTask?.map((taskObj) => (
					<div className={styles.task_item} key={taskObj.id}>
						<label
							htmlFor={taskObj.id}
							className={
								taskObj.checked ? `${styles.delete}` : ""
							}
						>
							<input
								onChange={(e) => hadleTaskCheck(e.target.id)}
								type="checkbox"
								checked={taskObj.checked}
								id={taskObj.id}
								name="todo-task"
							/>
							{ taskObj.task }
						</label>
						<span
							onClick={() => deleteTask(taskObj.id)}
							className={styles.cencel_btn}
						>
							{ taskObj.checked && "X" }
						</span>
					</div>
				)) }

			</div>
		</div>
	);
};

export default MyLodoTask;
