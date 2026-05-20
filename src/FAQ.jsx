import "./FAQ.css";

function FAQ() {
  return (
    <div className="faq-section">
      <section class="section bg-gray">
        <div class="section-inner">
          <div class="sh center">
            <span class="tag">Questions</span>
            <h2 class="section-title">Frequently Asked Questions</h2>
            <div class="divider mx-auto"></div>
          </div>
          <div class="faq-wrap">
            <div class="faq">
              <div class="faq-q" onclick="faq(this)">
                How long does company registration take?
                <span class="arr">+</span>
              </div>
              <div class="faq-a">
                <p>
                  Most registrations are completed within 48 hours of submitting
                  all required documents. Complex structures may take slightly
                  longer. We keep you updated at every step.
                </p>
              </div>
            </div>
            <div class="faq">
              <div class="faq-q" onclick="faq(this)">
                What documents do I need? <span class="arr">+</span>
              </div>
              <div class="faq-a">
                <p>
                  You'll need national IDs for all directors, proof of address,
                  your proposed company name, and a Memorandum of Association.
                  We guide you through the full checklist step by step.
                </p>
              </div>
            </div>
            <div class="faq">
              <div class="faq-q" onclick="faq(this)">
                Do you offer a free initial consultation?
                <span class="arr">+</span>
              </div>
              <div class="faq-a">
                <p>
                  Yes — we offer a free 30-minute consultation to understand
                  your needs and recommend the right path forward. No commitment
                  required.
                </p>
              </div>
            </div>
            <div class="faq">
              <div class="faq-q" onclick="faq(this)">
                Can I register a company remotely? <span class="arr">+</span>
              </div>
              <div class="faq-a">
                <p>
                  Absolutely. Our process is fully digital — submit documents
                  online and receive your certificate by email. No in-person
                  visit needed.
                </p>
              </div>
            </div>
            <div class="faq">
              <div class="faq-q" onclick="faq(this)">
                What business structures do you register?
                <span class="arr">+</span>
              </div>
              <div class="faq-a">
                <p>
                  We register private limited companies (Pvt Ltd), public
                  companies, sole traders, partnerships, trusts, non-profits,
                  and more. Contact us to discuss your specific needs.
                </p>
              </div>
            </div>
            <div class="faq">
              <div class="faq-q" onclick="faq(this)">
                Do you assist with ZIMRA registration?
                <span class="arr">+</span>
              </div>
              <div class="faq-a">
                <p>
                  Yes. We handle ZIMRA tax registration, VAT registration, and
                  ongoing compliance as part of our full registration and
                  compliance packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
