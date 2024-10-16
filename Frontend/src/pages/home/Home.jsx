import './Home.css'
import Navbar from '../../components/Navbar'
import Faq from '../../components/Faq'
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <div className="home-container">
        <Navbar />
      </div>

      <div>
        <section
          className="hero h-screen bg-cover bg-center relative flex items-center justify-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517495306984-57619c8ad8dc')`,
          }}
        >
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 animate-pulse">
              Welcome to Sports Club
            </h1>
            <p className="text-lg mb-8">
              Explore, Join, and Compete in a variety of sports at our college.
            </p>
            <button className="btn btn-primary">Explore Events</button>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="feature-card w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                <div className="icon text-6xl mb-4 text-blue-500">⚽</div>
                <h3 className="text-2xl font-semibold mb-2">
                  Wide Variety of Sports
                </h3>
                <p className="text-gray-600">
                  Choose from a wide range of sports like football, basketball,
                  badminton, and more.
                </p>
              </div>
              <div className="feature-card w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                <div className="icon text-6xl mb-4 text-blue-500">🏆</div>
                <h3 className="text-2xl font-semibold mb-2">
                  Competitive Events
                </h3>
                <p className="text-gray-600">
                  Join the most exciting and competitive sports events with
                  great prizes.
                </p>
              </div>
              <div className="feature-card w-full md:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                <div className="icon text-6xl mb-4 text-blue-500">🎉</div>
                <h3 className="text-2xl font-semibold mb-2">
                  Fun and Community
                </h3>
                <p className="text-gray-600">
                  Be part of a thriving community of athletes and sports
                  enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Featured Sports
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="sport-card w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1600250395178-40fe752e5189?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Football</h3>
                  <p className="text-gray-600">
                    Join the football team and compete in inter-college
                    tournaments.
                  </p>
                </div>
              </div>

              <div className="sport-card w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1518614368389-5160c0b0de72?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Basketball</h3>
                  <p className="text-gray-600">
                    Shoot hoops and represent our college in basketball events.
                  </p>
                </div>
              </div>

              <div className="sport-card w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1718452739586-5b467f1f109b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Badminton"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Badminton</h3>
                  <p className="text-gray-600">
                    Smash your way to the top in our badminton tournaments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white mb-8">
              Join our sports club today and be part of the action!
            </p>
            <button className="btn btn-primary">Sign Up Now</button>
          </div>
        </section>
      </div>

      <div className="FAQ">
        <Faq />
      </div>

      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}

export default Home
