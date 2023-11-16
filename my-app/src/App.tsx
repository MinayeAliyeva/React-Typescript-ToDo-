import "./App.css";
import { ChangeEvent, FC, useState } from "react";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [toDos, setToDos] = useState<string[]>([]);
  //editid index varmi
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addTask = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (task.trim() !== "") {
      if (editingIndex!==null) {
        //edit index varsa
        const updatedTodos = [...toDos];
        updatedTodos[editingIndex] = task;
        setToDos(updatedTodos);
        setTask("");
        setEditingIndex(null);
      } else {
        setToDos([...toDos,task]);
        setTask("");
      }
    }
  };
  //
  const deleteTask = (index: number): void => {
    const updatedToDos = [...toDos];
    updatedToDos.splice(index, 1);
    setToDos(updatedToDos);}
    //
  const updateTask = (index: number): void => {
    setEditingIndex(index);
    setTask(toDos[index]);
  };
  return (
    <div className="App">
      <h1>ToDO App</h1>
      <form>
        <input
          value={task}
          onChange={(event) => setTask(event.target.value)}
          type="text"
        />
     <button onClick={(event) => addTask(event)}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </form>
      <div>
        <ul>
          {toDos.map((task, index) => {
            return (
              <div>
                <li>{task}</li>
                <button onClick={() => deleteTask(index)}>Delete</button>
                <button onClick={() => updateTask(index)}>Update</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
