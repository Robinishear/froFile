function App() {
  const user = {
    name: "RN Robin IS Hear",
    title: "Web Developer",
    location: "Bangladesh",
    avatar: "https://i.ibb.co/ccQZ9ZQ8/images-2.jpg",
    bio: "Hardworking and focused aspiring developer, determined to succeed and lead.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white flex items-center justify-center px-6">
      <div className="backdrop-blur-xl  bg-white/80 border border-blue-300 p-8 rounded-3xl shadow-2xl max-w-xs text-center  transform hover:scale-105 duration-300">
        <img
          src={user.avatar}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-blue-700 font-medium text-sm mt-1">{user.title}</p>
        <p className="text-gray-500 text-sm">{user.location}</p>
        <p className="mt-4 text-gray-700 text-sm leading-relaxed italic">{user.bio}</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
          Connect
        </button>
      </div>
    </div>
  );
}

export default App;
