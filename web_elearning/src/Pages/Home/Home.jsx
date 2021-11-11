import Header from "../../Components/Header/Header";
import Bar from "../../Components/Bar/Bar";
import Attend from "../../Components/Attend/Attend";
import './Home.css'
<<<<<<< HEAD
import Footer from "../../Components/Footer/Footer";
=======
import Footer from "./Footer/Footer";
import Category from "./Category/Category";
import Design from "./Design/Design";
>>>>>>> e8f124ff82f19d90ce2db0c6109661262c5c7c97

function Home() {

    return (
      <div className="Home">
        <div className="Top">
          <Bar />
          <Header />
        </div>
        <div className="Mid">
          <Attend />
          <Category />
          <Design />
        </div>
        <Footer />
      </div>
      
    );
  }
  
  export default Home;