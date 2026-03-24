import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Blog from "./Blog";

function App() {
  return (
    <div className="app ">
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
