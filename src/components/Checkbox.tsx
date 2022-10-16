import { Check } from "phosphor-react";
import { useState } from "react";
export function Checkbox() {
  const [checked, isChecked] = useState(false);
  return (
    <>
      {checked ? (
        <div
          onClick={() => isChecked(!checked)}
          className="w-[17.5px] h-[17.5px] bg-purple-dark hover:bg-purple ring-1 cursor-pointer ring-purple-dark rounded-full flex items-center justify-center"
        >
          <Check className="font-bold" />
          <input type="checkbox" className="hidden" checked />
        </div>
      ) : (
        <div
          onClick={() => isChecked(!checked)}
          className="w-[17.5px] h-[17.5px] bg-transparent hover:bg-gray-600 ring-1 cursor-pointer ring-blue rounded-full"
        >
          <input type="checkbox" className="hidden" />
        </div>
      )}
    </>
  );
}
