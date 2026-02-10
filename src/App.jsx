import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

function App() {
  return (
    <div className="app container-fluid">
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
