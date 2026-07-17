import "./ContactsPage.css";
import Header from "../Header";
import Footer from "../Footer";

// function showToast(msg) {
//   const t = document.getElementById("toast");
//   t.textContent = msg;
//   t.classList.add("show");
//   setTimeout(() => t.classList.remove("show"), 3500);
// }

// function submitForm() {
//   showToast("Message sent! We'll be in touch within 24 hours.");
// }

function ContactsPage() {
  return (
    <div className="contacts-page-section ">
      <Header className="contacts-header"> </Header>
      {/* <div id="page-contact" className="page">
        <div className="page-hero">
          <div className="breadcrumb">
            Home <span>/ Contact</span>
          </div>
          <h1>Get In Touch</h1>
          <p>
            We'd love to hear from you. Book a consultation or simply reach out.
          </p>
        </div> */}

      <section className="section">
        <div className="section-inner contact-grid">
          <div className="contact-info">
            <span className="section-tag">Contact Us</span>
            <h3>Let's Start a Conversation</h3>
            <div className="divider"></div>
            <p>
              Whether you have a question about our services, need a quote, or
              want to book a free consultation — our team is ready to help.
            </p>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Our Office</h4>
                <p>
                  123 Business Avenue
                  <br />
                  Harare, Zimbabwe
                </p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+263 77 000 0000</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>hello@vostertech.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h4>Business Hours</h4>
                <p>
                  Mon – Fri: 8:00 AM – 5:00 PM
                  <br />
                  Sat: 9:00 AM – 1:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="form-card">
            <h3>Send Us a Message</h3>
            <p>
              Fill in the form below and we'll get back to you within 24 hours.
            </p>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="e.g. John" />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="e.g. Moyo" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@company.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+263 77 000 0000" />
            </div>
            <div className="form-group">
              <label>Service Interested In</label>
              <select>
                <option value="">Select a service...</option>
                <option>Company Registration</option>
                <option>Business Consultation</option>
                <option>Tax & Financial Advisory</option>
                <option>Compliance Services</option>
                <option>Legal Services</option>
                <option>Website Development</option>
                <option>Social Media Management</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Your Message</label>
              <textarea placeholder="Tell us a bit about your business and how we can help..."></textarea>
            </div>
            <button className="btn-primary">Send Message →</button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
    // </div>
  );
}

export default ContactsPage;
