import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function DeleteButton({ className, ...props }: DeleteButtonProps) {
  return (
    <button
      {...props}
      className={`hover:bg-gray-400 w-6 h-6 flex items-center justify-center rounded text-gray-300 hover:text-danger ${className}`}
    >
      <Trash />
    </button>
  );
}
