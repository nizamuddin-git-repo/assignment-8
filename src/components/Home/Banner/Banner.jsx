import { Link } from "react-router-dom";
import book from "../../../assets/images/book.png";
import { useEffect, useState } from "react";
import BookAll from "../../BookAll/BookAll";


const Banner = () => {

   const [books, setBooks] = useState([]);

   useEffect(()=> {
    fetch('book.json')
    .then((res)=> res.json())
    .then((data)=> setBooks(data))
   }, [])


  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800 rounded-2xl">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-16">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Books To Freshen Up <br />
              <span className="text-success">Your Bookshelf</span>
            </h1>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5">
              <Link to="/bookslist">
                <button className="btn btn-success text-white px-12">
                  View The List
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={book}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      <h1 className="text-center text-3xl font-bold mt-14">Books</h1>
      <div className="grid grid-cols-3 gap-4 mt-14">
          {
            books.map(book => <BookAll key={book.id} book={book}></BookAll>)
          }
      </div>
    </div>
  );
};

export default Banner;
