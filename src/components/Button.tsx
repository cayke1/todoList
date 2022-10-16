import { PlusCircle } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-blue-dark flex gap-2 justify-center items-center rounded-lg py-4 px-4 hover:bg-blue transition-colors font-bold"
    >
      Criar
      <PlusCircle size={16} />
    </button>
  );
}
