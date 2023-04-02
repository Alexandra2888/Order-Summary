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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            alt="music"
            className="container__plan-music"
            aria-label="Music">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#DFE6FB" />
              <path
                fill="#717FA6"
                fill-rule="nonzero"
                d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"
              />
            </g>
          </svg>
          <img src={data.img} />
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
