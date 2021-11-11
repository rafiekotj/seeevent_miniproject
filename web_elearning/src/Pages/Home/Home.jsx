import Header from "../../Components/Header/Header";
import Bar from "../../Components/Bar/Bar";
import Attend from "../../Components/Attend/Attend";
import './Home.css'
import Footer from "../../Components/Footer/Footer";

function Home() {

    return (
      <div className="Home">
        <div className="Top">
          <Bar />
          <Header />
        </div>
        <div className="Mid">
          <Attend />
        </div>
        <Footer />
      </div>
      
    );
  }
  
  export default Home;