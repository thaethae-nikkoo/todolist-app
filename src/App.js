import { useEffect, useState } from "react";
import Form from "./components/Form";
import Lists from "./components/Lists";
import { api } from "./api/api";

function App() {
  let [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    const data = await api
      .get("/todolists")
      .then((res) => res.data)
      .catch((e) => console.log(e.message));
    // console.log(data);
    setTasks(data);
  };
  // console.log(tasks);
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center ">
        <div className="w-full md:w-2/5 gap-y-4 shadow-lg p-4 border border-gray-200 rounded-lg">
          <h1 className="text-center font-bold text-2xl my-3">Todo Lists</h1>
          <Form />
          <Lists tasks={tasks} />
        </div>
      </div>
    </>
  );
}

export default App;
