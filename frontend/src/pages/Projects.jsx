import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: ""
  });


  // FETCH PROJECTS
  const fetchProjects = async () => {

    try {

      const token = localStorage.getItem("token");

      const res = await API.get("/projects", {
        headers: {
          Authorization: token
        }
      });

      setProjects(res.data);

    } catch (error) {

      console.log(error);
    }
  };


  useEffect(() => {
    fetchProjects();
  }, []);


  // HANDLE INPUT
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // CREATE PROJECT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");

      await API.post(
        "/projects",
        formData,
        {
          headers: {
            Authorization: token
          }
        }
      );

      alert("Project Created");

      setFormData({
        title: "",
        description: ""
      });

      fetchProjects();

    } catch (error) {

      console.log(error);
    }
  };


  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      <Navbar />

      <div className="p-10">

        {/* HEADING */}
        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            Projects
          </h1>

          <p className="text-gray-600 text-lg">
            Create and manage all your team projects
          </p>

        </div>


        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-200 mb-10"
        >

          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 mb-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 mb-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl shadow-md hover:scale-105 transition duration-300"
          >
            Create Project
          </button>

        </form>


        {/* PROJECT LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project._id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-100"
            >

              <div className="flex justify-between items-center mb-4">

                <h2 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h2>

                <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                  Active
                </span>

              </div>

              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Projects;