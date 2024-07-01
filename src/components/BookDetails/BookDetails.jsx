import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../../assets/utility/localStor";
import { Helmet } from "react-helmet-async";
const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);
  const {
    title,
    description,
    author,
    img,
    hashtags,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
  } = book;
  
  const handleBookAdd = () => {
    saveBook(idInt)
    toast('Book Read Successfull');
  }

  return (
    <div className="max-w-7xl mx-auto mt-10 flex gap-7">
      <Helmet>
        <title>
          Book Details
        </title>
      </Helmet>
      <div className="w-2/4 bg-slate-200 p-10 rounded-xl">
        <div className="flex justify-center">
          <img className="w-2/4" src={img} alt="" />
        </div>
      </div>
      <div className="w-2/4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-xs font-bold  text-slate-600">By : {author}</p>
        <hr className="mt-4" />
        <p className=" text-slate-600">Fiction</p>
        <hr className="mt-3" />
        <p className="text-slate-600 font-bold mt-5 text-xs">
          <span className="font-bold text-black">Review : </span>
          {description}
        </p>
        <div className="flex gap-8">
          <h2 className="mt-5 text-sm font-bold text-success">
            <span className="font-bold mr-4 text-black">Tag</span> #
            {hashtags[0]}
          </h2>
          <h2 className="mt-5 text-sm font-bold text-success">
            {" "}
            #{hashtags[1]}
          </h2>
          <h2 className="mt-5 text-sm font-bold text-success">
            {" "}
            #{hashtags[2]}
          </h2>
        </div>
        <hr className="mt-5" />
        <div className="flex justify-aroun gap-20 mt-5">
          <div>
            <h4 className="text-slate-600 font-bold text-xs">Number of Pages :</h4>
            <h4 className="mt-3 text-slate-600 font-bold text-xs">Publisher : </h4>
            <h4 className="mt-3 text-slate-600 font-bold text-xs">Year Of Publishing : </h4>
            <h4 className="mt-3 text-slate-600 font-bold text-xs">Rating : </h4>
          </div>
          <div>
            <h4 className="text-black font-bold text-xs">{totalPages}</h4>
            <h4 className="mt-3 text-black font-bold text-xs">{publisher}</h4>
            <h4 className="mt-3 text-black font-bold text-xs">{yearOfPublishing}</h4>
            <h4 className="mt-3 text-black font-bold text-xs">{rating}</h4>
          </div>
        </div>
        <div className="mt-7 flex gap-5">
        <button onClick={handleBookAdd} className="btn btn-outline btn-accent">Read</button>
        <button className="btn btn-active btn-accent text-white px-7">Wishlist</button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;
