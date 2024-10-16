import "./NewComplex.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Newcomplex() {
  return (
    <>
      <div className="new-complex">
        <Navbar />
      </div>

      <div className="flex flex-wrap justify-center new-complex-container">
        <div className="w-full sm:w-1/2 lg:w-1/2 p-4 card-container">
          <div className="card card-compact bg-base-100 w-full shadow-xl new-complex-card">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1611251135345-18c56206b863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Table Tennis"
                className="card-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Table Tennis</h2>
              <p>Exciting and fast-paced indoor sport. Join us for a match!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/2 p-4 card-container">
          <div className="card card-compact bg-base-100 w-full shadow-xl new-complex-card">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Badminton"
                className="card-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Badminton</h2>
              <p>Test your skills and reflexes with a game of badminton!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/2 p-4 card-container">
          <div className="card card-compact bg-base-100 w-full shadow-xl new-complex-card">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1620741212042-191b98df5e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Carrom"
                className="card-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Carrom</h2>
              <p>Relax with a classic game of carrom!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/2 p-4 card-container">
          <div className="card card-compact bg-base-100 w-full shadow-xl new-complex-card">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Chess"
                className="card-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chess</h2>
              <p>Sharpen your mind with a game of strategy and intellect.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Newcomplex;

