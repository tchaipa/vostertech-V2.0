import { Image } from "react-bootstrap";
import "./Blog.css";
// import one from "./assets/20.jpeg";
// import two from "./assets/20.jpeg";
// import four from "./assets/20.jpeg";
import { FaArrowRight } from "react-icons/fa";

function Blog() {
  return (
    <section class="section">
      <div class="section-inner">
        <div class="section-header center">
          <span class="section-tag">Insights</span>
          <h2 class="section-title">Latest Articles</h2>
          <div class="divider center"></div>
        </div>
        <div class="blog-grid">
          <div class="blog-card">
            <div class="blog-img">
              <div class="blog-img-placeholder">📝</div>
            </div>
            <div class="blog-body">
              <span class="blog-tag">Tax</span>
              <h3>Presumptive Tax vs Tax Clearance — What You Need to Know</h3>
              <p>
                Understanding the difference between presumptive tax and tax
                clearance can save your business time and money.
              </p>
              <div class="blog-meta">
                <span>📅 Apr 10, 2026</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
          <div class="blog-card">
            <div class="blog-img">
              <div class="blog-img-placeholder">🏛️</div>
            </div>
            <div class="blog-body">
              <span class="blog-tag">Registration</span>
              <h3>5 Things to Do Before Registering Your Company</h3>
              <p>
                Before you dive into the registration process, make sure these
                five critical steps are already in place.
              </p>
              <div class="blog-meta">
                <span>📅 Mar 28, 2026</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>
          <div class="blog-card">
            <div class="blog-img">
              <div class="blog-img-placeholder">📈</div>
            </div>
            <div class="blog-body">
              <span class="blog-tag">Finance</span>
              <h3>How to Structure Your Business Finances from Day One</h3>
              <p>
                Good financial habits from the start can make or break a
                business. Here's the expert guide to getting it right.
              </p>
              <div class="blog-meta">
                <span>📅 Mar 15, 2026</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
