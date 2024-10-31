import Navbar from "../../components/Navbar";
// import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-container">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section
        className="hero h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1632900112366-ce054a609422?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="text-center">
          <h1 className="text-6xl font-extrabold mb-4 animate-bounce text-white">
            <span className="text-yellow-500">Welcome</span> to NITK Sports Hub
          </h1>
          <p className="text-lg mb-8 animate-fade-in text-white">
            Explore, Join, and Compete in a variety of sports at our college.
          </p>
          <Link to="/more-events">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105">
              Explore Events
            </button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-yellow-300 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <div className="icon text-6xl mb-4 text-blue-500">⚽</div>
              <h3 className="text-2xl font-semibold mb-2 text-black">
                Wide Variety of Sports
              </h3>
              <p className="text-gray-600">
                Choose from football, basketball, badminton, and more.
              </p>
            </div>
            <div className="feature-card bg-blue-300 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <div className="icon text-6xl mb-4 text-blue-500">🏆</div>
              <h3 className="text-2xl font-semibold mb-2 text-black">
                Competitive Events
              </h3>
              <p className="text-gray-600">
                Join exciting sports events with great prizes.
              </p>
            </div>
            <div className="feature-card bg-red-300 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all">
              <div className="icon text-6xl mb-4 text-blue-500">🎉</div>
              <h3 className="text-2xl font-semibold mb-2 text-black">
                Fun and Community
              </h3>
              <p className="text-gray-600">
                Be part of a thriving sports community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Featured Sports Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Our Featured Sports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sport-card bg-white shadow-lg overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1600250395178-40fe752e5189?q=80&w=1931&auto=format&fit=crop"
                className="w-full h-48 object-cover"
                alt="Football"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  Football
                </h3>
                <p className="text-gray-600">
                  Join the football team and compete in tournaments.
                </p>
              </div>
            </div>
            <div className="sport-card bg-white shadow-lg overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1518614368389-5160c0b0de72?q=80&w=2000&auto=format&fit=crop"
                className="w-full h-48 object-cover"
                alt="Basketball"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  Basketball
                </h3>
                <p className="text-gray-600">
                  Represent our college in basketball events.
                </p>
              </div>
            </div>
            <div className="sport-card bg-white shadow-lg overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-48 object-cover"
                alt="Basketball"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  Cycle race
                </h3>
                <p className="text-gray-600">
                  Represent our college in basketball events.
                </p>
              </div>
            </div>
            <div className="sport-card bg-white shadow-lg overflow-hidden rounded-lg transform hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1718452739586-5b467f1f109b?q=80&w=2069&auto=format&fit=crop"
                className="w-full h-48 object-cover"
                alt="Badminton"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-black">
                  Badminton
                </h3>
                <p className="text-gray-600">
                  Smash your way to the top in our tournaments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-16 bg-gradient-to-r from-yellow-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8">
            Join our sports club today and be part of the action!
          </p>
          <Link to="/signup">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-transform transform hover:scale-105">
              Sign Up Now
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      {/* <div className="FAQ">
        <Faq />
      </div> */}

      {/* Footer Section */}
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}

export default Home;
