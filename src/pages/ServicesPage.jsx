import Header from "../Header";
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <div className="services-page-section container-fluid">
      <Header />
      <section class="section">
        <div class="section-inner">
          <div class="sh center">
            <span class="tag">What We Do</span>
            <h2 class="section-title">Everything Your Business Needs</h2>
            <div class="divider mx-auto"></div>
            <p class="section-sub">
              All services are delivered by experienced professionals who
              understand the Zimbabwean business environment.
            </p>
          </div>
          <div class="services-page-grid">
            <div class="svc">
              <div class="svc-icon">🏛️</div>
              <h3>Company Registration</h3>
              <p>
                Private limited, public, NPOs, partnerships — we handle all
                structures quickly and compliantly. Most registrations completed
                within 48 hours of document submission.
              </p>
            </div>
            <div class="svc">
              <div class="svc-icon">📊</div>
              <h3>Business Consultations</h3>
              <p>
                One-on-one sessions covering business structure, market entry
                strategy, risk assessment, and operational planning tailored to
                your goals and industry.
              </p>
            </div>
            <div class="svc">
              <div class="svc-icon">💰</div>
              <h3>Tax Advisory</h3>
              <p>
                Navigate Zimbabwe's tax landscape with confidence. Full
                compliance with ZIMRA, tax planning, returns filing, and
                advisory to minimise your liability legally.
              </p>
            </div>
            <div class="svc">
              <div class="svc-icon">💼</div>
              <h3>Financial Advisory</h3>
              <p>
                Strategic financial advice for growing businesses. Cash flow
                management, investment planning, business valuations, and
                financial modelling for SMEs and corporates.
              </p>
            </div>
            <div class="svc">
              <div class="svc-icon">✅</div>
              <h3>Compliance Services</h3>
              <p>
                Annual returns, regulatory filings, and ongoing compliance
                monitoring across all applicable authorities. We keep your
                business clean and penalty-free.
              </p>
            </div>
            <div class="svc">
              <div class="svc-icon">⚖️</div>
              <h3>Business Legal Services</h3>
              <p>
                Professional support for contracts, shareholder agreements,
                employment law, and dispute resolution through our trusted legal
                partners.
              </p>
            </div>
            <div class="svc">
              <div class="svc-icon">🌐</div>
              <h3>Website Development</h3>
              <p>
                Modern, mobile-responsive websites built to convert visitors
                into customers. From landing pages to full e-commerce stores.
              </p>
            </div>
            <div class="svc">
              <div class="svc-icon">📣</div>
              <h3>Social Media Management</h3>
              <p>
                Consistent, professional social presence managed on all
                platforms. Content creation, scheduling, community engagement,
                and analytics — all done for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
