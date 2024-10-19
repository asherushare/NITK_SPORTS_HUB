import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const MoreEvents = () => {
  const events = [
    {
      id: 1,
      title: "Basketball Championship",
      date: "October 20, 2024",
      location: "Main Stadium",
    },
    {
      id: 2,
      title: "Football Tournament",
      date: "October 25, 2024",
      location: "Field 2",
    },
    {
      id: 3,
      title: "Tennis Open",
      date: "November 5, 2024",
      location: "Tennis Court",
    },
    {
      id: 4,
      title: "Swimming Gala",
      date: "November 15, 2024",
      location: "Aquatic Center",
    },
    // Add more events as needed
  ];

  return (
    <>
    <div>
        <Navbar/>
    </div>
      <div className="p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 min-h-screen">
        <h1 className="text-4xl font-extrabold mb-12 text-gray-900 tracking-tight">
          Upcoming Sports Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="relative group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-in-out"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-6 relative z-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-2">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Location:</strong> {event.location}
                </p>
                <Link to="/slot-booking">
                  <button className="relative px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                    Register Now
                  </button>
                </Link>
              </div>
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MoreEvents;
