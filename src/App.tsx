import React from 'react';
import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import MyTodoList from './components/MyTodoList';
import MyLodoTask from './components/MyLodoTask';
import AddTask from './components/AddTask';
import Form from './components/Form';
import { myList } from './data.json';
import { genarateId } from './utility';
import Clock from './components/Clock';
import Footer from './components/Footer';

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
    todoList.slice().filter((list:ITodo): void => {
      if(list.category.toLocaleLowerCase() === category.toLocaleLowerCase()) {
        matchTask = [...matchTask, list]
      }
    });
    setSelectedTask(matchTask)
  }, [category, todoList])
  
  // making list array instance of category (1st reload time) 
  useEffect(() => {
    let listArr:string[] = [];
    todoList.forEach(list => {
      if(listArr.indexOf(list.category) === -1) {
        listArr.push(list.category)
      }
    })
    setCategoryList(listArr);
  }, [])

  const addListName = ( listName:string ): void => {
    setCategoryList([...categoryList, listName])
  }

  const addTask = (task: string): void => {
    const id = genarateId(10);
    setTodoList(todo => [...todo, {id, category: category, task: task, checked: false}])
  };

  // checked the task object by id then change checked value opposite
  const hadleTaskCheck = (id: string): void => {
    let modifyListObj = selectedTask.slice().map(listObj => {
      if(listObj.id === id) {
        listObj.checked = !(listObj.checked);
      }
      return listObj;
    })
    setSelectedTask(modifyListObj);
  };

  const deleteTask = (id: string) => {
    setSelectedTask(taskArr => taskArr.filter(taskObj => taskObj.id !== id));
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Clock /> 
        <div className={styles.todo}>

          <div className={styles.todo_list}>
            <MyTodoList categoryList={categoryList} category={category} setCategory={setCategory} /> 
            <Form addListName={addListName} />
          </div>

          <div className={styles.todo_task}>
            <MyLodoTask hadleTaskCheck={hadleTaskCheck} deleteTask={deleteTask} selectedTask={selectedTask}/> 
            <AddTask addTask={addTask} /> 
          </div> 
          
        </div>
        <Footer /> 
      </div>
    </div>
  );
}

export default App;
