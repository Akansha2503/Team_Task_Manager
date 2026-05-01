import Navbar from "../components/Navbar";

function Dashboard() {

  return (

    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      <Navbar />

      <div className="p-10">

        <div className="mb-10">

          <h1 className="text-5xl font-bold text-gray-800 mb-3">
            Dashboard
          </h1>

          <p className="text-gray-600 text-lg">
            Welcome to your Team Task Manager
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* PROJECT CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-bold text-gray-800">
                Projects
              </h2>

              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                Active
              </div>

            </div>

            <p className="text-gray-500 leading-relaxed">
              Manage all your team projects efficiently in one place.
            </p>

          </div>


          {/* TASK CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-bold text-gray-800">
                Tasks
              </h2>

              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                Ongoing
              </div>

            </div>

            <p className="text-gray-500 leading-relaxed">
              Track progress and update task status with ease.
            </p>

          </div>


          {/* TEAM CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-100">

            <div className="flex items-center justify-between mb-4">

              <h2 className="text-2xl font-bold text-gray-800">
                Team
              </h2>

              <div className="bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                Members
              </div>

            </div>

            <p className="text-gray-500 leading-relaxed">
              Role-based team collaboration and management system.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;