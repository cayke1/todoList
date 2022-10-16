import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

interface TaskProps {
  state: "active" | "complete";
  content: string;
}
export function Task({ state, content }: TaskProps) {
  return (
    <div className="w-full bg-gray-500 mt-3 px-4 py-4 text-md rounded-lg flex justify-between items-center">
      <Checkbox />
      <p className="max-w-[632px]">{content}</p>
      <DeleteButton className="self-start" />
    </div>
  );
}
