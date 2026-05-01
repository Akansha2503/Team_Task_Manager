import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";


function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "todo"
  });


  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await API.get("/tasks", {
        headers: {
          Authorization: token
        }
      });

      setTasks(res.data);

    } catch (error) {

      console.log(error);
    }
  };


  useEffect(() => {
    fetchTasks();
  }, []);


  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // CREATE TASK
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.post(
        "/tasks",
        formData,
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert("Task Created");

      setFormData({
        title: "",
        description: "",
        status: "todo"
      });

      fetchTasks();

    } catch (error) {

      console.log(error);
    }
  };


  // UPDATE TASK STATUS
  const updateStatus = async (id, status) => {

    try {

      const token = localStorage.getItem("token");

      await API.put(
        `/tasks/${id}`,
        { status },
        {
          headers: {
            Authorization: token
          }
        }
      );

      fetchTasks();

    } catch (error) {

      console.log(error);
    }
  };


  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-8">
          Tasks
        </h1>


        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow mb-10"
        >

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />

          <textarea
            name="description"
            placeholder="Task Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
          >

            <option value="todo">
              Todo
            </option>

            <option value="in-progress">
              In Progress
            </option>

            <option value="completed">
              Completed
            </option>

          </select>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded"
          >
            Create Task
          </button>

        </form>


        {/* TASK LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {tasks.map((task) => (

            <div
              key={task._id}
              className="bg-white p-6 rounded shadow"
            >

              <h2 className="text-2xl font-bold mb-2">
                {task.title}
              </h2>

              <p className="mb-3">
                {task.description}
              </p>

              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded">
                {task.status}
              </span>


              <div className="mt-4 flex gap-2">

                <button
                  onClick={() => updateStatus(task._id, "todo")}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  Todo
                </button>

                <button
                  onClick={() => updateStatus(task._id, "in-progress")}
                  className="bg-yellow-300 px-3 py-1 rounded"
                >
                  Progress
                </button>

                <button
                  onClick={() => updateStatus(task._id, "completed")}
                  className="bg-green-300 px-3 py-1 rounded"
                >
                  Done
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Tasks;