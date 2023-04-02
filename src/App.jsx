import "./App.scss";

function App() {
  return (
    <section className="main__container">
      <div
        className="main__container-img"
        aria-label="Music Subscription"
      ></div>
      <div className="container">
        <h2 className="container__title">Order Summary</h2>
        <p className="container__para">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="container__plan">
          <img
            src="./src/assets/images/icon-music.svg"
            alt="music"
            className="container__plan-music"
            aria-label="Music"
          />
          <div className="container__plan-center">
            <h2 className="container__plan-center-title">Annual Plan</h2>
            <p className="container__plan-center-price">$59.99/year</p>
          </div>
          <a href="#" className="container__plan-anchor">
            Change
          </a>
        </div>
      </div>
      <div className="btn__container">
        <button className="btn__container-payment" aria-label="Proceed Payment">
          Proceed Payment
        </button>
        <button className="btn__container-cancel" aria-label="Cancel Order">
          Cancel Order
        </button>
      </div>
    </section>
  );
}

export default App;
