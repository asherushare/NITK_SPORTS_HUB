import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function SlotBooking() {
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    if (
      selectedSport &&
      selectedDate &&
      selectedSlot &&
      userName &&
      userEmail
    ) {
      setBookingConfirmed(true);
    } else {
      alert("Please fill in all the fields!");
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 m-6 border-t-4 border-purple-500">
          <h1 className="text-3xl font-bold text-center text-purple-900 mb-8">
            Book Your Slot
          </h1>

          {!bookingConfirmed ? (
            <form className="space-y-6" onSubmit={handleBooking}>
              {/* Select Sport */}
              <div className="flex flex-col space-y-2">
                <label className="text-lg font-medium text-purple-800">
                  Select Sport:
                </label>
                <select
                  className="p-4 border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 ease-in-out"
                  value={selectedSport}
                  onChange={(e) => setSelectedSport(e.target.value)}
                  required
                >
                  <option value="">Choose a sport...</option>
                  <option value="Table Tennis">Table Tennis</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Carrom">Carrom</option>
                  <option value="Chess">Chess</option>
                </select>
              </div>

              {/* Select Date */}
              <div className="flex flex-col space-y-2">
                <label className="text-lg font-medium text-purple-800">
                  Choose Date:
                </label>
                <input
                  type="date"
                  className="p-4 border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 ease-in-out"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>

              {/* Select Time Slot */}
              <div className="flex flex-col space-y-2">
                <label className="text-lg font-medium text-purple-800">
                  Select Time Slot:
                </label>
                <select
                  className="p-4 border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 ease-in-out"
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  required
                >
                  <option value="">Choose a slot...</option>
                  <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                  <option value="10:00 AM - 12:00 PM">
                    10:00 AM - 12:00 PM
                  </option>
                  <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                  <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                  <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                </select>
              </div>

              {/* User Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-lg font-medium text-purple-800">
                  Your Name:
                </label>
                <input
                  type="text"
                  className="p-4 border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 ease-in-out"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>

              {/* User Email */}
              <div className="flex flex-col space-y-2">
                <label className="text-lg font-medium text-purple-800">
                  Your Email:
                </label>
                <input
                  type="email"
                  className="p-4 border border-gray-300 rounded-xl shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 ease-in-out"
                  placeholder="Enter your email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:bg-purple-800 transition-all duration-300 ease-in-out"
              >
                Book Slot
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600">
                Booking Confirmed!
              </h2>
              <p className="mt-6 text-lg text-gray-700">
                Thank you, <span className="font-medium">{userName}</span>! You
                have successfully booked a slot for{" "}
                <span className="font-medium">{selectedSport}</span> on{" "}
                <span className="font-medium">{selectedDate}</span> during{" "}
                <span className="font-medium">{selectedSlot}</span>.
              </p>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default SlotBooking;
