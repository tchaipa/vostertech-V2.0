import { Image } from "react-bootstrap";
import "./Blog.css";
import one from "./assets/20.jpeg";
import two from "./assets/20.jpeg";
import four from "./assets/20.jpeg";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
  return (
    <div className="blog-section">
      <h2>Blog</h2>
      <div className="blog-cards container-fluid">
        <div className="blog-card card">
          <Image className="blog-image" alt="" src={four}></Image>
          <div className="blog-card-content">
            <h5>Presumptive Tax vs Tax Clearance</h5>
            <span>8 min read</span>
          </div>
        </div>
        <div className="blog-card card">
          <Image className="blog-image" alt="" src={one}></Image>
          <div className="blog-card-content">
            <h5>Presumptive Tax vs Tax Clearance</h5>
            <span>5 min read</span>
          </div>
        </div>
        <div className="blog-card card">
          <Image className="blog-image" alt="" src={two}></Image>
          <div className="blog-card-content">
            <h5>Presumptive Tax vs Tax Clearance</h5>
            <span>8 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
