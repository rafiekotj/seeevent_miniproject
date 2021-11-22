
import Bar from "../../Components/Bar/Bar";
import Attend from "../../Components/Attend/Attend";
import './Home.css'
import Footer from "../../Components/Footer/Footer";
import Category from "../../Components/Category/Category";
import Design from "../../Components/Design/Design";
import HeaderforHome from "../../Components/HeaderforHome/HeaderforHome";
import Barr from "../../Components/Bar/Bar_2";

function Homee() {

    return (
      <div className="Home">
        <div className="Top">
          {/* <HeaderforHome /> */}
          <Barr />
        </div>
        <div className="Mid">
          <Attend />
          <Category />
          <Design />
          <Footer />
        </div>
      </div>
      
    );
  }
  
  export default Homee;