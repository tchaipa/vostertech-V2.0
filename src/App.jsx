import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Works from "./Works";
import Registration from "./Registration";
import Blog from "./Blog";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Works />
      <Registration />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
