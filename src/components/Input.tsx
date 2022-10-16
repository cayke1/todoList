import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  return (
    <input
      className="py-4 placeholder:text-gray-300 px-4 bg-gray-500 outline-none focus:ring-2 ring-purple-dark rounded-lg w-[638px] h-[54px]"
      {...props}
    />
  );
}
