import Header from "../Header";
import Footer from "../Footer";
import "./AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="about-section">
    <Header className="contact-header"></Header>
      <section class="section">
        <div class="section-inner about-grid">
          <div class="about-img-wrap">
            <div class="about-img-bg">🏢</div>
            <div class="about-badge">
              <span class="big">2012</span>
              <span class="sm">Founded</span>
            </div>
          </div>
          <div class="about-content">
            <span class="section-tag">Our Story</span>
            <h2>Built to Help Businesses Succeed</h2>
            <div class="divider"></div>
            <p>
              VosterTech Consultancy was founded in 2012 with a simple mission:
              make business registration and compliance accessible, affordable,
              and stress-free for every entrepreneur in Zimbabwe and beyond.
            </p>
            <p>
              Over the past 12 years, we've helped over 500 companies get off
              the ground — from solo traders to large corporations — and we
              continue to grow alongside our clients.
            </p>
            <p>
              Today, we offer a full suite of business services under one roof,
              from registration and compliance to digital marketing and web
              development.
            </p>
          </div>
        </div>
      </section>
      <section className="section services-bg ">
        <div className="section-inner">
          <div className="section-header center">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider center"></div>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎯</div>
              <h3>Integrity</h3>
              <p>
                We operate with complete transparency and honesty. Our clients
                trust us because we never compromise on ethics.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Efficiency</h3>
              <p>
                We value your time. Our processes are streamlined to deliver
                fast, accurate results without unnecessary delays.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌟</div>
              <h3>Excellence</h3>
              <p>
                We hold ourselves to the highest standards in everything we do —
                from client communication to documentation.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Partnership</h3>
              <p>
                We see ourselves as long-term partners in your success, not just
                a once-off service provider.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-inner">
          <div className="section-header center">
            <span className="section-tag">The Team</span>
            <h2 className="section-title">Meet Our Experts</h2>
            <div className="divider center"></div>
            <p className="section-sub">
              Experienced, passionate professionals dedicated to your business
              success.
            </p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-img">
                <div className="team-avatar">TM</div>
              </div>
              <div className="team-body">
                <h3>Takudzwa Moyo</h3>
                <div className="role">Founder & CEO</div>
                <p>
                  15+ years in business consulting and company registration.
                  Passionate about SME development in Zimbabwe.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img">
                <div className="team-avatar">SN</div>
              </div>
              <div className="team-body">
                <h3>Sharon Nkomo</h3>
                <div className="role">Head of Compliance</div>
                <p>
                  Chartered accountant with deep expertise in tax law and
                  regulatory compliance across multiple jurisdictions.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img">
                <div className="team-avatar">BM</div>
              </div>
              <div className="team-body">
                <h3>Brian Mhaka</h3>
                <div className="role">Financial Advisor</div>
                <p>
                  CFA holder with 10 years in financial planning and business
                  strategy for growing companies.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img">
                <div className="team-avatar">LC</div>
              </div>
              <div className="team-body">
                <h3>Lerato Chigamba</h3>
                <div className="role">Digital Solutions Lead</div>
                <p>
                  Full-stack developer and digital strategist helping businesses
                  build their online presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default AboutUsPage;
