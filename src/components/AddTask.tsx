import React from "react";
import { useState } from "react";
import styles from "../styles/AddTask.module.scss";

interface Iprops {
	addTask: (name: string) => void;
}

const AddTask = ({ addTask }: Iprops) => {
	const [task, setTask] = useState<string>("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (typeof task === "string" && task.length > 0) {
			addTask(task);
			setTask("");
		}
	};
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<button type="submit" className={styles.add_btn}>
				+
			</button>
			<input
				onChange={(e) => setTask(e.target.value)}
				type="text"
				value={task}
				placeholder="new list name"
			/>
		</form>
	);
};

export default AddTask;
