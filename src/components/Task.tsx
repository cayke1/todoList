import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";
import { useState } from "react";

interface TaskProps {
  id: number;
  completedTask: boolean;
  content: string;
  onUpdateTask: (id: number) => void;
}
export function Task({
  content,
  completedTask = false,
  onUpdateTask,
  id,
}: TaskProps) {
  function handleCompleteTask() {
    onUpdateTask(id);
  }
  return (
    <div className="w-full bg-gray-500 mt-3 px-4 py-4 text-md rounded-lg flex justify-between items-center">
      {completedTask ? (
        <>
          <div onClick={handleCompleteTask}>
            <Checkbox checked />
          </div>
          <p className="max-w-[632px] line-through text-gray-300">{content}</p>
        </>
      ) : (
        <>
          <div onClick={handleCompleteTask}>
            <Checkbox />
          </div>
          <p className="max-w-[632px]">{content}</p>
        </>
      )}
      <DeleteButton className="self-start" />
    </div>
  );
}
