import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStorBook } from "../../../assets/utility/localStor";
import { IoLocationOutline,  } from "react-icons/io5";
import { IoMdContacts } from "react-icons/io";
import { MdContactPage } from "react-icons/md";

const BookList = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const books = useLoaderData();

  const [bookRead, setbookRead] = useState([]);
  const [displayBook, setDisplayBook ] = useState([])

  const handleBook = (sote) => {
    if(sote === 'all'){
      setDisplayBook(bookRead);
    }
    else if (sote === 'rating'){
      const rating = bookRead.filter(book => book.rating === '3.81');
      setDisplayBook(rating);
    }
    else if (sote === 'totalPages'){
      const totalPages = bookRead.filter(book => book.totalPages === '332')
      setDisplayBook(totalPages);
    }
    else if (sote === 'yearOfPublishing'){
      const yearOfPublishing = bookRead.filter(book => book.yearOfPublishing === '1979')
      setDisplayBook(yearOfPublishing)
    }
  }

  useEffect(() => {
    const storBook = getStorBook();
    if (books.length > 0) {
      const bookStor = books.filter((book) => storBook.includes(book.id));
      //  console.log(bookStor, storBook, );
      setbookRead(bookStor);
      setDisplayBook(bookStor);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl dark:bg-gray-100 mt-10 p-2 rounded-lg font-bold">
        Books 
      </h2>
      <div className="flex justify-center mt-8">
        <details className="dropdown">
          <summary className="btn m-1 bg-success text-white">Sort By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=> handleBook('all')}>
              <a>All</a>
            </li>
            <li onClick={()=> handleBook('rating')}>
              <a>Rating</a>
            </li>
            <li onClick={()=> handleBook('totalPages')}>
              <a>Number of Pages</a>
            </li>
            <li onClick={()=> handleBook('yearOfPublishing')}>
              <a>Publisher</a>
            </li>
          </ul>
        </details>
      </div>
      <div></div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap  dark:text-gray-800 mt-10">
        <div>
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
        </div>
        <div>
          <Link
            onClick={() => setTabIndex(1)}
            to={`Wishlist`}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
      {/* Book addd */}
      <div className="mt-6">
        {displayBook.map((book) => (
          <div key={book.id}>
            <div className="card card-side bg-base-100 shadow-xl mt-6">
              <figure>
                <img
                  className="bg-slate-100 p-6 px-10 rounded-xl ml-5"
                  src={book.img}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">{book.title}</h2>
                <p className="text-xs text-slate-400">By : {book.author}</p>
                <div className="flex gap-10">
                  <div className=" mt-3">
                    <p className="text-xs text-success">
                      <span className="font-bold ">Tag</span> {book.hashtags[0]}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-success mt-3">
                      <span className="font-bold"></span> {book.hashtags[1]}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mt-3 flex justify-center gap-2"><IoLocationOutline className="text-xl"></IoLocationOutline>
                      
                      Year Of Publishing : {book.yearOfPublishing}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div>
                    <p className="mt-3 text-xs text-slate-400 flex gap-2"> <IoMdContacts className="text-xl"></IoMdContacts>
                      Publisher : {book.publisher}
                    </p>
                  </div>
                  <div>
                    <p className="mt-3 text-xs text-slate-400 flex gap-2"><MdContactPage className="text-xl"></MdContactPage>
                      Page {book.totalPages}
                    </p>
                  </div>
                </div>
                <hr className="mt-4" />
                <div className="card-actions mt-3 gap-5">
                  <button className="btn btn-primary rounded-3xl bg-blue-100 text-blue-800 border-0">Category: Classic</button>
                  <button className="btn btn-primary rounded-3xl bg-orange-100 text-orange-400 border-0">Rating : {book.rating}</button>
                  <button className="btn btn-success rounded-3xl text-white">View Details</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
