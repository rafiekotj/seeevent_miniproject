
import Bar from "../../Components/Bar/Bar";
import Attend from "../../Components/Attend/Attend";
import './Home.css'
import Footer from "../../Components/Footer/Footer";
import Category from "../../Components/Category/Category";
import Design from "../../Components/Design/Design";

function Home() {

    return (
      <div className="Home">
        <div className="Top">
          <Bar />
          
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