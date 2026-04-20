import "./ContactsPage.css";

function ContactsPage() {
  return (
    <div id="page-contact" class="page">
      <div class="page-hero">
        <div class="breadcrumb">
          Home <span>/ Contact</span>
        </div>
        <h1>Get In Touch</h1>
        <p>
          We'd love to hear from you. Book a consultation or simply reach out.
        </p>
      </div>

      <section class="section">
        <div class="section-inner contact-grid">
          <div class="contact-info">
            <span class="section-tag">Contact Us</span>
            <h3>Let's Start a Conversation</h3>
            <div class="divider"></div>
            <p>
              Whether you have a question about our services, need a quote, or
              want to book a free consultation — our team is ready to help.
            </p>
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <h4>Our Office</h4>
                <p>
                  123 Business Avenue
                  <br />
                  Harare, Zimbabwe
                </p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p>+263 77 000 0000</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p>hello@vostertech.com</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
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

          <div class="form-card">
            <h3>Send Us a Message</h3>
            <p>
              Fill in the form below and we'll get back to you within 24 hours.
            </p>
            <div class="form-row">
              <div class="form-group">
                <label>First Name</label>
                <input type="text" placeholder="e.g. John" />
              </div>
              <div class="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="e.g. Moyo" />
              </div>
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@company.com" />
            </div>
            <div class="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+263 77 000 0000" />
            </div>
            <div class="form-group">
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
            <div class="form-group">
              <label>Your Message</label>
              <textarea placeholder="Tell us a bit about your business and how we can help..."></textarea>
            </div>
            <button class="btn-primary" onclick="submitForm()">
              Send Message →
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">
              <div class="logo-mark">V</div>
              <span class="logo-text">
                Voster<span>Tech</span>
              </span>
            </div>
            <p>Your trusted partner in business registration and compliance.</p>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Company Registration</a>
              </li>
              <li>
                <a href="#">Tax Advisory</a>
              </li>
              <li>
                <a href="#">Compliance</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#" onclick="showPage('about')">
                  About Us
                </a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#">📍 Harare, Zimbabwe</a>
              </li>
              <li>
                <a href="#">📞 +263 77 000 0000</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 VosterTech. All rights reserved.</span>
          <span>Made with ♦ in Zimbabwe</span>
        </div>
      </footer>
    </div>
  );
}

export default ContactsPage;
