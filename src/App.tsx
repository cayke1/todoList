import { ClipboardText } from "phosphor-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="font-sans text-gray-100 bg-gray-600 h-screen">
      <header className="w-full h-[200px]">
        <Header />
      </header>
      <div className="flex justify-center mt-[-1.75rem] gap-2">
        <Input placeholder="Adicione uma nova tarefa" />
        <Button />
      </div>

      <main className="flex flex-col items-center justify-center w-[736px] mx-auto mt-16">
        <div className="text-md font-bold flex justify-between items-center w-full">
          <div className="flex gap-2">
            <p className="text-blue">Tarefas criadas</p>
            <div className="bg-gray-400 w-6 text-center rounded-full text-gray-200">
              0
            </div>
          </div>
          <div className="flex gap-2">
            <p className="text-purple">Concluídas</p>
            <div className="bg-gray-400 w-6 text-center rounded-full text-gray-200">
              0
            </div>
          </div>
        </div>
        <div className="w-full mt-6 border-t border-gray-400 rounded flex-col justify-center items-center text-center text-gray-300">
          <ClipboardText size={54} className="mt-16 mx-auto" />
          <p className="mt-4 font-bold">
            Você ainda não tem tarefas cadastradas
          </p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>
    </div>
  );
}

export default App;
