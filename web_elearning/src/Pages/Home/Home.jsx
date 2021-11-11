import Header from "./Header/Header";
import Bar from "./Bar/Bar";
import Attend from "./Attend/Attend";
import './Home.css'
import Footer from "./Footer/Footer";

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