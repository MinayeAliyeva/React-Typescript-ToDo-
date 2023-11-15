import { ChangeEvent, FC } from "react";
import "./App.css";
import { useState } from "react";
import { type } from "os";
const App: FC = () => {
  //taskin tipi string
  const [task, setTask] = useState<string>("");
  const [workDay, setWorkDay] = useState<number>(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(typeof(event.target.value));
    
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setWorkDay(Number(event.target.value));
    }
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
        <button >Yeni Task Ekle</button>
      </div>
    </div>
  );
};

export default App;
