import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Prices from './screens/Search';
import Books from './screens/Books' ;
import Sciencebooks from './screens/Sciencebooks'
import Programmingbooks from './screens/Programmingbooks'
import Languagesbooks from './screens/Languagesbooks'
import About from './screens/About';
import Booksoftheyear from './screens/Booksoftheyear';
import Exclusive from './screens/Exclusive';
import ErrorPage from './screens/ErrorPage';
import Register from './screens/Register'
import { useNavigate  ,Routes , Route }  from 'react-router-dom' ;
import axios from 'axios';
import Lnading from './screens/LandingPage';
import Login from './screens/Login';
import AddBook from './screens/AddBook'
import Search from './screens/Search'



function App() {

let userInfo = JSON.parse(localStorage.getItem("userInfo"))


    return ( <>
        <Header />
        <div className='container-md' style={{
          "text-align": "center",
          padding: "50px 0",
          "justify-content": "center"
        }}>
        <Routes>
          <Route path='/' element={<Lnading />}  />
          <Route path='/prices' element ={<Prices/>} />
          <Route path='/sciencebooks' element ={<Sciencebooks/>} />
          <Route path='/languagesbooks' element ={<Languagesbooks/>} />
          <Route path='/programmingbooks' element ={< Programmingbooks/>} />
          <Route path='/about' element ={<About/>} />
          <Route path='/booksoftheyear' element ={<Booksoftheyear/>} />
          <Route path='/exclusive' element ={<Exclusive/>} />
          <Route path='/login' element ={<Login/>}  />
          <Route path='/register' element ={<Register />} />
          <Route path='/Books' element ={<Books />} />
          <Route path='/AddBook' element ={<AddBook />} />
          <Route path='/Search' element ={<Search />} />

          <Route path='*' element={<ErrorPage />} />

          
          
        </Routes>
        </div>
        <Footer />
        </>
    
    );
}

export default App;