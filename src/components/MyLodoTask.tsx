import React from 'react';
import styles from '../styles/MyTodoTask.module.scss';

type taskType = {
    id: string,
    category: string,
    task: string,
    checked: boolean,
}

interface Iprops {
    selectedTask: taskType[],
}

const MyLodoTask = ({ selectedTask }: Iprops) => {
    return (
        <div className={styles.my_todo_task}>
            <header>
              <h3>youtube</h3>
              <small>{selectedTask.length} task remaining</small>
            </header>
            <div className={styles.todo_task_grp}>
              {selectedTask.map((taskObj) => (
                <>
                  <input type="radio" name="todo-task" key={taskObj.id} /> {taskObj.task} <hr />
                </>
              ) )}
            </div>
        </div>
    );
};

export default MyLodoTask;