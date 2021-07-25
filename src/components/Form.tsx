import { Add } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styles from '../styles/Form.module.scss';

interface Iprops {
    addTodoName: (todoName: string) => void;
}

const Form = ({addTodoName}: Iprops) => {
    const [todoName, setTodoName] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(typeof todoName === 'string' && todoName.length) {
            addTodoName(todoName)
            setTodoName('');
        }
    }

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<button type="submit" className={styles.add_btn}> + </button>
			<input
				onChange={(e) => setTodoName(e.target.value)}
                value={todoName}
				type="text"
				placeholder="new list name"
			/>
		</form>
	);
};

export default Form;
