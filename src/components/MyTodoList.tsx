import React from 'react';
import styles from "../styles/MyTodoList.module.scss";

interface Iprops {
	categoryList: string[],
    category: string,
    setCategory: (name: string) => void;
}

const MyTodoList = ({ categoryList, category, setCategory }: Iprops) => {
    return (
        <div className={styles.my_lodo_list}>
            <h2>My Lists</h2>
			<ul>
				{categoryList.map((name) => (
					<li 
                    onClick={() => setCategory(name)} 
                    style={name === category ? {fontWeight: 'bolder'}: {}}
                    key={name}
                    >
                        {name}
                    </li>
				))}
			</ul>
        </div>
    );
};

export default MyTodoList;