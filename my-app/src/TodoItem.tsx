import { todoType } from "./appTypes";
type Props = {
  task: todoType;
  deleteTask(nameToDelate:string):void
};
const TodoItem = ({ task ,deleteTask}: Props) => {
  return (
    <div>
      <div>
        <p>{task.taskName}</p>
        <p>{task.workDay}</p>
        <button onClick={()=>deleteTask(task.taskName)}>Sil</button>
      </div>
    </div>
  );
};

export default TodoItem;
