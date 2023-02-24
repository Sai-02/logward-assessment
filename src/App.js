import { useState, createContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import TodoList from "./components/TodoList/TodoList";
const TaskContext = createContext();
export { TaskContext };
function App() {
  const [activeList, setActiveList] = useState("My Day");
  const [tasksObj, setTasksObj] = useState({
    "My Day": [],
  });
  useEffect(() => {
  }, [tasksObj]);
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
        <div className="col-span-7 flex flex-col overflow-hidden">
          <Header />
          <TodoList tasks={tasksObj[activeList]} />
        </div>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
