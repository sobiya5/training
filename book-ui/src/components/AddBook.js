import React, { useState } from "react";
import BookService from "../service/BookService";
import {Link, useNavigate} from 'react-router-dom';
 function AddBook() {
  const service = BookService();
  const[book,setBook] = useState ({bookId : ''});
  const navigate = useNavigate ();
  const changeData = (obj) => {
    setBook({...book,[obj.target.name]:obj.target.value})
  }
  const submitData = (event) =>{
    event.preventDefault();
    if(book.bookId==='0' || book.bookId.length===0)
      alert("Invalid book id");
    else{
    service.addBook(book);
    navigate('/getallbooks')
  }}
  return(
    <div className='container'>
        <h1>Add new book</h1>
        <form>
            <label>Enter Book ID</label>
            <input type = 'text' name = 'bookId' value = {book.bookId}
            onChange = {changeData} className="form-control"/>
            <label>Enter Book Title</label>
            <input type = 'text' name = 'title' value = {book.title}
            onChange = {changeData} className="form-control"/>
            <label>Enter Book Author</label>
            <input type = 'text' name = 'author' value = {book.author}
            onChange = {changeData} className="form-control"/>
             <label>Enter Book Publisher</label>
            <input type = 'text' name = 'publisher' value = {book.publisher}
            onChange = {changeData} className="form-control"/>
             <label>Enter Book Price</label>
            <input type = 'text' name = 'price' value = {book.price}
            onChange = {changeData} className="form-control"/>
            <button className="ui button medium green"
            onClick= {submitData}>Add</button>
            <Link to = {"/getallbooks"}><button className="btn btn-primary">Cancel</button>

            </Link>
        </form>

    </div>
  )
}
 export default AddBook