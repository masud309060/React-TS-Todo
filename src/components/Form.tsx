import React from "react";
import { useState } from "react";
import styles from '../styles/Form.module.scss';

interface Iprops {
    addListName: (listName: string) => void;
}

const Form = ({addListName}: Iprops) => {
    const [listName, setListName] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(typeof listName === 'string' && listName.length) {
            addListName(listName)
            setListName('');
        }
    }

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<button type="submit" className={styles.add_btn}> + </button>
			<input
				onChange={(e) => setListName(e.target.value)}
                value={listName}
				type="text"
				placeholder="new list name"
			/>
		</form>
	);
};

export default Form;
