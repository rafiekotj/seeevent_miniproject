import './Search.css'
import Header from "./../../Components/Header/Header";
import Footer from "./../../Components/Footer/Footer";
import SearchBar from './../../Components/SearchBar/SearchBar';
import HeaderCreate from '../../Components/HeaderCreate/HeaderCreate';

function Search() {
  return (
    <div className="Signin">
      <div className="Top">
        <HeaderCreate />
      </div>
      <div className="Mid">
        <SearchBar />
      </div>
      <Footer />
    </div>
  )
}

export default Search;