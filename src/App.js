import { useState, createContext } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TodoList from "./components/TodoList/TodoList";
const TaskContext = createContext();
export { TaskContext };
function App() {
  const [activeList, setActiveList] = useState("");
  const [tasksObj, setTasksObj] = useState({});
  return (
    <TaskContext.Provider
      value={{
        activeList,
        setActiveList,
        tasksObj,
        setTasksObj,
      }}
    >
      <div className="grid grid-cols-10 h-screen w-screen">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-7">
          <Header />
          <TodoList />
        </div>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
