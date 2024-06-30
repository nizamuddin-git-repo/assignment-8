import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BookAll = ({ book }) => {
  const { id, title, author, img, hashtags, rating } = book;

  return (
    <Link to={`/book/${id}`}>
     <div className="card bg-base-100 w-96 shadow-xl border-1 border">
      <figure className=" rounded-2xl bg-slate-200 w-80 h-56 ml-8 mt-6">
        <img src={img} alt="Shoes" className="" />
      </figure>
      <div className="card-body">
        <div className="flex gap-3">
          <p className=" text-sm font-bold text-success">#{hashtags[0]}</p>
          <p className=" text-sm font-bold text-success">#{hashtags[1]}</p>
          <p className=" text-sm font-bold text-success">#{hashtags[2]}</p>
        </div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm font-bold text-slate-600">By : {author}</p>
        <hr />
        <div className="flex gap-20 items-center mt-3">
          <p className="text-sm font-bold text-slate-600">Fiction</p>
          <p className="text-sm font-bold text-slate-600 flex gap-3">
            {rating} <FaRegStar className=" text-xl" />
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default BookAll;
