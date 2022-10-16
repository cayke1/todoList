import { ClipboardText } from "phosphor-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import { ChangeEvent, useEffect, useState } from "react";

interface TasksProps {
  id: number;
  completed: boolean;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([
    { id: 1, completed: false, content: "Fazer algo" },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleNewTaskValue(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event.target.value);
  }

  function handleCreateNewTask() {
    const randomId = Math.random();
    if (newTaskTitle !== "") {
      setTasks([
        {
          id: randomId,
          content: newTaskTitle,
          completed: false,
        },
        ...tasks,
      ]);
    }
    setNewTaskTitle("");
  }

  function handleUpdateTaskState(id: number) {
    const newTaskList = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(newTaskList);
    const seeCompletedTasks = tasks.filter((task) => {
      return task.completed;
    });
    setCompletedTasks(seeCompletedTasks.length);
  }

  function handleRemoveTask(id: number) {
    const queryTask = tasks.filter((task) => task.id !== id);
    setTasks(queryTask);
  }

  return (
    <div className="font-sans text-gray-100 bg-gray-600 min-h-screen">
      <header className="w-full h-[200px]">
        <Header />
      </header>
      <div className="flex justify-center mt-[-1.75rem] gap-2">
        <Input
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskValue}
          value={newTaskTitle}
        />
        <Button onClick={handleCreateNewTask} />
      </div>

      <main className="flex flex-col items-center justify-center w-[736px] mx-auto mt-16">
        <div className="text-md font-bold flex justify-between items-center w-full">
          <div className="flex gap-2">
            <p className="text-blue">Tarefas criadas</p>
            <div className="bg-gray-400 w-6 text-center rounded-full text-gray-200">
              {tasks.length}
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-purple">Concluídas</p>
            <div className="bg-gray-400 w-[52px] text-center rounded-full text-gray-200">
              {completedTasks} de {tasks.length}
            </div>
          </div>
        </div>
        {tasks.length === 0 ? (
          <div className="w-full mt-6 border-t border-gray-400 rounded flex-col justify-center items-center text-center text-gray-300">
            <ClipboardText size={54} className="mt-16 mx-auto" />
            <p className="mt-4 font-bold">
              Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <div className="mt-3 w-full mb-6">
            {tasks.map((task) => (
              <Task
                id={task.id}
                content={task.content}
                completedTask={task.completed}
                key={task.id}
                onUpdateTask={() => handleUpdateTaskState(task.id)}
                onDeleteTask={() => handleRemoveTask(task.id)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
