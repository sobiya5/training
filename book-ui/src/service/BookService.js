import axios from "axios";
const BOOK_URI = "http://localhost:8383/library/book";
const USER_URI = "http://localhost:8383/library/user";

export default function BookService() {
  const getBooks = () => {
    return axios.get(BOOK_URI);
  };
  const addBook = (book) => {
     return axios.post(BOOK_URI,book);
  };
  const delBook = (id) =>{
     return axios.delete(BOOK_URI+`/deletebook/${id}`);
  }
  const getBookById = (id) =>{
     return axios.get(BOOK_URI+"/byid"+`/${id}`);
  }
  const editBook = (book) =>{
     return axios.put(BOOK_URI,book);
  }
 const loginValidate = async (login) => {
         return await axios.post(USER_URI+"/validate",login);
    }
     return Object.freeze({getBooks,addBook,delBook,getBookById,editBook,loginValidate});
    
  }
  

