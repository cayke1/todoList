import { Check } from "phosphor-react";
import { ButtonHTMLAttributes, useState } from "react";

interface CheckboxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
}
export function Checkbox({ checked, ...props }: CheckboxProps) {
  return (
    <>
      {checked ? (
        <button
          {...props}
          className="w-[17.5px] h-[17.5px] bg-purple-dark hover:bg-purple ring-1 cursor-pointer ring-purple-dark rounded-full flex items-center justify-center"
        >
          <Check className="font-bold" />
        </button>
      ) : (
        <button
          {...props}
          className="w-[17.5px] h-[17.5px] bg-transparent hover:bg-gray-600 ring-1 cursor-pointer ring-blue rounded-full"
        ></button>
      )}
    </>
  );
}
