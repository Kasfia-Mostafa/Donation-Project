import { Link } from "react-router-dom";

const Donate = ({ donate }) => {
  const { image, card_bg, price, category, text_title, category_bg, title } =
    donate || {};

  return (
    <div>
      <div className="card card-side" style={{ background: category_bg }}>
        <figure>
          <img className="w-60 h-60" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <p
            className="h-10 w-24 p-2 text-center font-bold rounded-md"
            style={{ background: card_bg, color: text_title }}
          >
            {category}
          </p>
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className="text-xl font-bold" style={{ color: text_title }}>
            ${price.toFixed(2)}
          </p>
          <div className="card-actions justify-start">
            <Link to="/informationDetail">
              <button
                className="btn h-10 border-none text-white"
                style={{ background: text_title }}
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
