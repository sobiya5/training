
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import GetAllBooks from './components/GetAllBooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
      <Routes>
         <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
        <Route path = '/getallbooks' element ={<GetAllBooks/>}/>
        <Route path = '/addbook' element = {<AddBook/>}/>
          <Route path='/edit/:id' element={<EditBook/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
