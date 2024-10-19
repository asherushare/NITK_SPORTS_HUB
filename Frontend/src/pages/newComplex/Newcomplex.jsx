import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Newcomplex() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen">
        <div className="flex flex-wrap justify-center py-12 px-4">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-xl transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Table Tennis"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Badminton</h2>
                <p className="text-gray-700 mb-4">
                  Exciting and fast-paced indoor sport. Join us for a match!
                </p>
                <div className="flex justify-end">
                  <Link to="/slot-booking">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300">
                      Book to Play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-xl transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1518614368389-5160c0b0de72?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Badminton"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">BasketBall</h2>
                <p className="text-gray-700 mb-4">
                  Test your skills and reflexes with a game of football!
                </p>
                <div className="flex justify-end">
                  <Link to="/slot-booking">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300">
                      Book to Play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-xl transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1620741212042-191b98df5e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Carrom"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Carrom</h2>
                <p className="text-gray-700 mb-4">
                  Relax with a classic game of carrom!
                </p>
                <div className="flex justify-end">
                  <Link to="/slot-booking">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300">
                      Book to Play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-xl transform transition hover:-translate-y-2 hover:shadow-2xl duration-300">
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Chess"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">Chess</h2>
                <p className="text-gray-700 mb-4">
                  Sharpen your mind with a game of strategy and intellect.
                </p>
                <div className="flex justify-end">
                  <Link to="/slot-booking">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300">
                      Book to Play
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Newcomplex;
