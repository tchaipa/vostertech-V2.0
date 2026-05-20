import "./Services.css";

function Services() {
  return (
    <div className="services-section container-fluid">
      <section class="section bg-gray">
        <div class="section-inner">
          <div class="sh center">
            <span class="tag">What We Offer</span>
            <h2 class="section-title">Our Core Services</h2>
            <div class="divider mx-auto"></div>
            <p class="section-sub">
              From company formation to ongoing compliance — everything under
              one roof.
            </p>
          </div>
          <div class="services-grid">
            <div class="svc">
              <div class="svc-icon">🏛️</div>
              <h3>Company Registration</h3>
              <p>
                Fast, compliant registration for all business types — sole
                traders, private limited, NPOs, and more — in as little as 48
                hours.
              </p>
              <a class="svc-link" href="#" onclick="go('services')">
                Learn more →
              </a>
            </div>
            <div class="svc">
              <div class="svc-icon">📊</div>
              <h3>Business Consultations</h3>
              <p>
                One-on-one sessions with experienced consultants to steer your
                business decisions confidently from day one.
              </p>
              <a class="svc-link" href="#" onclick="go('services')">
                Learn more →
              </a>
            </div>
            <div class="svc">
              <div class="svc-icon">💰</div>
              <h3>Tax & Financial Advisory</h3>
              <p>
                Strategic tax planning and financial advice to minimise
                liability and fuel sustainable growth.
              </p>
              <a class="svc-link" href="#" onclick="go('services')">
                Learn more →
              </a>
            </div>
            <div class="svc">
              <div class="svc-icon">⚖️</div>
              <h3>Compliance Services</h3>
              <p>
                Annual returns, regulatory filings, and ongoing compliance
                monitoring — we keep your business clean.
              </p>
              <a class="svc-link" href="#" onclick="go('services')">
                Learn more →
              </a>
            </div>
            <div class="svc">
              <div class="svc-icon">🌐</div>
              <h3>Website Development</h3>
              <p>
                Modern, responsive websites built for performance. We help you
                establish a strong digital presence.
              </p>
              <a class="svc-link" href="#" onclick="go('services')">
                Learn more →
              </a>
            </div>
            <div class="svc">
              <div class="svc-icon">📣</div>
              <h3>Social Media Management</h3>
              <p>
                Consistent, high-quality social presence managed on your behalf
                so you can focus on your business.
              </p>
              <a class="svc-link" href="#" onclick="go('services')">
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
