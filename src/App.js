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
  const [shouldOpenSidebar, setShouldOpenSidebar] = useState(false);
  return (
    <TaskContext.Provider
      value={{
        activeList,
        setActiveList,
        tasksObj,
        setTasksObj,
        shouldOpenSidebar,
        setShouldOpenSidebar,
      }}
    >
      <div className="grid grid-cols-10 h-screen w-screen relative">
        <div
          className={`sm:col-span-3 bg-white ${
            window.screen.width < 640 && shouldOpenSidebar
              ? "absolute w-screen h-screen grid"
              : window.screen.width < 640
              ? "hidden"
              : "grid"
          }`}
        >
          <Sidebar />
        </div>
        <div className="col-span-10 sm:col-span-7 flex flex-col overflow-hidden">
          <Header />
          <TodoList tasks={tasksObj[activeList]} />
        </div>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
