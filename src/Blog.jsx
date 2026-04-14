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
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              obcaecati voluptatum error voluptate asperiores eligendi possimus,
              corporis aliquam perferendis fugit odit illo deleniti a ipsum.
              Fugiat assumenda omnis incidunt provident...
              <a className="blog-link" href="">
                Read More
              </a>
            </span>
          </div>
        </div>
        <div className="blog-card card">
          <Image className="blog-image" alt="" src={one}></Image>
          <div className="blog-card-content">
            <h5>Presumptive Tax vs Tax Clearance</h5>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              suscipit necessitatibus distinctio, incidunt nulla perferendis
              amet exercitationem ab quia non aperiam aliquid harum quasi eos
              ex, porro ipsa magnam atque...
              <a className="blog-link" href="">
                Read More
              </a>
            </span>
          </div>
        </div>
        <div className="blog-card card">
          <Image className="blog-image" alt="" src={two}></Image>
          <div className="blog-card-content">
            <h5>Presumptive Tax vs Tax Clearance</h5>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              inventore iusto ut? Eum ipsa officia sit, necessitatibus aliquid
              omnis voluptatum harum ab, nulla sequi deserunt eligendi quisquam
              provident quo vel...
              <a className="blog-link" href="blogs">
                Read More
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
