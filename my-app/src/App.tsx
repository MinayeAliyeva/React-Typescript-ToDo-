import { ChangeEvent, FC } from "react";
import "./App.css";
import { useState } from "react";
import { todoType } from "./appTypes";
import TodoItem from "./TodoItem";
import { uid } from "uid";

const App: FC = () => {
  //taskin tipi string
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const [toDos, setToDos] = useState<todoType[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(typeof event.target.value);

    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
  };
  const addNewTask = (): void => {
    const newTask = {
      taskName: task,
      workDay,
    };
    setToDos([...toDos, newTask]);
    setTask("");
    setWorkDay(0);
  };
  const deleteTask = (name: string): void => {
    setToDos(toDos.filter((task) => task.taskName !== name));
  };
  return (
    <div className="App">
      <div>
        <input
          name="task"
          value={task}
          onChange={handleChange}
          type="text"
          placeholder="Taskinizi giriniz..."
        />
        <input
          name="workDay"
          value={workDay}
          onChange={handleChange}
          type="number"
          placeholder="Kac gunde tamamlamalisiniz..."
        />
        <button onClick={addNewTask}>Yeni Task Ekle</button>
      </div>
      {toDos.map((task: todoType) => {
        return <TodoItem deleteTask={deleteTask} key={uid()} task={task} />;
      })}
    </div>
  );
};

export default App;
