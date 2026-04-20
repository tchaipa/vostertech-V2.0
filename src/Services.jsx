import "./Services.css";

function Services() {
  return (
    <div className="services-section">
      <section class="section services-bg ">
        <div class="section-inner">
          <div class="section-header center">
            <span class="section-tag">What We Offer</span>
            <h2 class="section-title">Our Core Services</h2>
            <div class="divider center"></div>
            <p class="section-sub">
              From company formation to ongoing compliance — we handle
              everything so you can focus on building your business.
            </p>
          </div>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🏛️</div>
              <h3>Company Registration</h3>
              <p>
                We offer company registration services for all kinds of
                businesses and all industries, quickly and compliantly.
              </p>
              <a class="service-link" href="#" onclick="showPage('services')">
                Learn more →
              </a>
            </div>
            <div class="service-card">
              <div class="service-icon">📊</div>
              <h3>Business Consultations</h3>
              <p>
                Get expert one-on-one consultation sessions to steer your
                business in the right direction from day one.
              </p>
              <a class="service-link" href="#" onclick="showPage('services')">
                Learn more →
              </a>
            </div>
            <div class="service-card">
              <div class="service-icon">💰</div>
              <h3>Tax & Financial Advisory</h3>
              <p>
                Our financial advisors help you optimise your tax position and
                plan strategically for sustainable growth.
              </p>
              <a class="service-link" href="#" onclick="showPage('services')">
                Learn more →
              </a>
            </div>
            <div class="service-card">
              <div class="service-icon">⚖️</div>
              <h3>Compliance Services</h3>
              <p>
                Stay on the right side of the law. We help you comply with all
                applicable rules and regulations.
              </p>
              <a class="service-link" href="#" onclick="showPage('services')">
                Learn more →
              </a>
            </div>
            <div class="service-card">
              <div class="service-icon">📱</div>
              <h3>Website Development</h3>
              <p>
                Modern, professional websites built for performance. We help you
                establish a strong digital presence.
              </p>
              <a class="service-link" href="#" onclick="showPage('services')">
                Learn more →
              </a>
            </div>
            <div class="service-card">
              <div class="service-icon">📣</div>
              <h3>Social Media Management</h3>
              <p>
                Consistent, high-quality social presence managed on your behalf
                so you can focus on your business.
              </p>
              <a class="service-link" href="#" onclick="showPage('services')">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
