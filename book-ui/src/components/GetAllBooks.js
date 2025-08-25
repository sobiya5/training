import React, { useEffect, useState } from 'react'
import BookService from '../service/BookService'
import { Link, useNavigate } from 'react-router-dom';

function GetAllBooks() {
    const [books, setBooks] = useState([]);
    const service = BookService();
    const navigate = useNavigate();
    const role = sessionStorage.getItem("role");

    useEffect(()=>{
        getBooks();
    });

    const getBooks =() =>{
        service.getBooks().then((response)=>{
            setBooks(response.data);
        });
    }

    const deleteBook =(event,id) => {
        event.preventDefault();
        service.delBook(id);
        navigate(0);
    }

    return (
    <div className='container'>
         <table className="table table-striped table-hover">
            <thead>
                <tr align="left">
                <th>BOOK ID</th>
                <th>TITLE</th>
                <th>AUTHOR</th>
                <th>PUBLICATIONS</th>
                <th>PRICE</th>
                <th></th>
                {role==='admin'?
                  <th><Link to={"/addbook"}> <button className="btn btn-primary">Add Book</button> 
                        </Link></th> : <th></th>
                }
                </tr>
            </thead>
            <tbody>
                {
                    books.map(b => (
                <tr key={b.bookId} align="left">
                    <td>{b.bookId}</td>            
                    <td>{b.title}</td>            
                    <td>{b.author}</td>            
                    <td>{b.publisher}</td>            
                    <td>{b.price}</td> 
                    {role==='admin' ?
                    <React.Fragment>
                      <td> <Link to={`/edit/${b.bookId}`}> <button className="btn btn-warning">Update</button>  </Link></td>
                      <td><button  onClick={(event)=>deleteBook(event,b.bookId)} className="btn btn-danger">Delete</button></td>  
                    </React.Fragment> : <React.Fragment></React.Fragment>
                  }
                 </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}
  
export default GetAllBooks
