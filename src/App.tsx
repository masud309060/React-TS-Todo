import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import MyTodoList from './components/MyTodoList';
import MyLodoTask from './components/MyLodoTask';
import AddTask from './components/AddTask';
import Form from './components/Form';
import { myList } from './data.json';
import { genarateId } from './utility';

interface ITodo {
    id: string,
    category: string,
    task: string,
    checked: boolean,
}

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>(myList);
  const [category, setCategory] = useState<string>("Grocery");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [selectedTask, setSelectedTask] = useState<ITodo[]>([] as ITodo[]);

  useEffect(() => {
    let matchTask:ITodo[] = [];
    
    todoList.filter((list:ITodo) => {
      if(list.category === category) {
        matchTask = [...matchTask, list]
      }
    });
    setSelectedTask(matchTask)
  }, [category, todoList])
  
  useEffect(() => {
    let listArr:string[] = [];
    todoList.forEach(list => {
      if(listArr.indexOf(list.category) === -1) {
        listArr.push(list.category)
      }
    })
    setCategoryList(listArr);
  }, [])

  const addTodoName = ( listName:string ):void => {
    setCategoryList([...categoryList, listName])
  }

const addTask = (task: string): any => {
  const id = genarateId(10);
  setTodoList(todo => [...todo, {id, category: category, task: task, checked: false}])
};

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.todo}>
          <div className={styles.todo_list}>
            <MyTodoList categoryList={categoryList} category={category} setCategory={setCategory} /> 
            <Form addTodoName={addTodoName} />
          </div>

          <div className={styles.todo_task}>
            <MyLodoTask selectedTask={selectedTask}/> 
            <AddTask addTask={addTask} /> 
          </div> 
          
        </div>
      </div>
    </div>
  );
}

export default App;
