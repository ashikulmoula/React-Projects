import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <>
      <h1 className="bg-green-600 m-4 p-4 rounded-xl text-center text-2xl">
        Hello Redux Toolkit
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
