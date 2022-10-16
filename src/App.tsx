import { Header } from "./components/Header";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="font-sans text-gray-100 bg-gray-600 h-screen">
      <header className="w-full h-[200px]">
        <Header />
      </header>
      <div className="flex justify-center mt-[-1.75rem]">
        <Input
          placeholder="Adicione uma nova tarefa"
          className="py-4 px-4 bg-gray-500 outline-none focus:ring-2 ring-purple-dark rounded-lg w-[638px] h-[54px]"
        />
      </div>
    </div>
  );
}

export default App;
