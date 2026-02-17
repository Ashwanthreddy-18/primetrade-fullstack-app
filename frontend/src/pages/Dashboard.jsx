import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api";

const Dashboard = () => {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      navigate("/", { replace: true });
    }
  };

  // Check authentication + load tasks
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/", { replace: true });
      return;
    }

    fetchTasks();
    // eslint-disable-next-line
  }, []);

  // Create task
  const handleAddTask = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/tasks",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (err) {
      alert("Error adding task");
    }
  };

  // Toggle complete
  const toggleComplete = async (task) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/tasks/${task._id}`,
        { completed: !task.completed },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchTasks();
    } catch (err) {
      alert("Error updating task");
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (err) {
      alert("Error deleting task");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  // Search + Filter Logic
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "pending") return !task.completed;
      return true;
    });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      {/* Create Task */}
      <div className="bg-gray-800 p-6 rounded mb-8 shadow-lg border border-gray-700">
        <h2 className="text-xl mb-4 font-semibold">Create New Task</h2>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          onClick={handleAddTask}
          className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded bg-gray-700 w-full md:w-1/2 outline-none"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-3 rounded bg-gray-700 outline-none"
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Task List */}
      <div className="bg-gray-800 p-6 rounded shadow-lg border border-gray-700">
        <h2 className="text-xl mb-4 font-semibold">Your Tasks</h2>

        {filteredTasks.length === 0 ? (
          <p className="text-gray-400">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <div
              key={task._id}
              className="bg-gray-700 p-4 rounded mb-4 flex justify-between items-center transition hover:scale-[1.01]"
            >
              <div>
                <h3
                  className={`font-bold text-lg ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {task.description}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => toggleComplete(task)}
                  className={`px-3 py-1 rounded transition ${
                    task.completed
                      ? "bg-yellow-500 hover:bg-yellow-600"
                      : "bg-green-500 hover:bg-green-600"
                  }`}
                >
                  {task.completed ? "Undo" : "Done"}
                </button>

                <button
                  onClick={() => handleDelete(task._id)}
                  className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
