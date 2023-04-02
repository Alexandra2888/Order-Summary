import "./App.scss";
import data from "./data";

function App() {
  return (
    <section className="main__container">
      <div
        className="main__container-img"
        aria-label="Music Subscription"
      ></div>
      <div className="container">
        <h2 className="container__title">{data.title}</h2>
        <p className="container__para">{data.para}</p>
        <div className="container__plan">
          <img
            src={data.img}
            alt="music"
            className="container__plan-music"
            aria-label="Music"
          />
          <div className="container__plan-center">
            <h2 className="container__plan-center-title">{data.plan}</h2>
            <p className="container__plan-center-price">{data.price}</p>
          </div>
          <a href="#" className="container__plan-anchor">
            {data.change}
          </a>
        </div>
      </div>
      <div className="btn__container">
        <button className="btn__container-payment" aria-label="Proceed Payment">
          {data.payment}
        </button>
        <button className="btn__container-cancel" aria-label="Cancel Order">
          {data.cancel}
        </button>
      </div>
    </section>
  );
}

export default App;
