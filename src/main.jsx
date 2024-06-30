import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout.jsx';
import Home from './components/Home/Home.jsx';
import Book from './components/Book/Book.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import BookList from './components/BookAll/BooksList/BookList.jsx';
import BookRead from './components/BookRead/BookRead.jsx';
import WishlistBooks from './components/WishlistBooks/WishlistBooks.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookslist",
        element: <BookList></BookList>,
        loader: () => fetch('/book.json'),
        children: [
          {
            index: true,
            element: <BookRead></BookRead>,
          },
          {
            path: 'Wishlist',
            element: <WishlistBooks></WishlistBooks>,
          },
        ],
      },
      {
        path: "/book",
        element: <Book></Book>,
        loader: ()=> fetch('/book.json'),
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch('/book.json'),
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)
