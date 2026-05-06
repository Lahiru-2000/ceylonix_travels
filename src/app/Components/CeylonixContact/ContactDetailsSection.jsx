import React from "react";

const contactCards = [
  {
    icon: "⌖",
    title: "Our Address",
    line1: "Ceylonix Travels (Pvt) Ltd",
    line2: "Colombo, Sri Lanka",
  },
  {
    icon: "✉",
    title: "Email Us",
    line1: "info@ceylonix.com",
    line2: "Email us anytime for tour inquiries and support.",
  },
  {
    icon: "☎",
    title: "Call / WhatsApp",
    line1: "+94 77 657 6689",
    line2: "Contact us for quick assistance and travel guidance.",
  },
];

const ContactDetailsSection = ({ image }) => {
  return (
    <section style={{ background: "#0C111D", padding: "70px 0 80px" }}>
      <div className="ceylon-container">
        <div className="row g-3 mb-4">
          {contactCards.map((card) => (
            <div key={card.title} className="col-md-4">
              <article
                style={{
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.05)",
                  padding: "18px 14px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    margin: "0 auto 10px",
                    borderRadius: "8px",
                    background: "rgba(252,15,192,0.17)",
                    color: "#FC0FC0",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  {card.icon}
                </div>
                <h3 style={{ margin: "0 0 5px", color: "#FC0FC0", fontSize: "14px", fontWeight: 700 }}>{card.title}</h3>
                <p style={{ margin: "0 0 3px", color: "#fff", fontSize: "12px" }}>{card.line1}</p>
                <p style={{ margin: 0, color: "rgba(255,255,255,0.7)", fontSize: "11px" }}>{card.line2}</p>
              </article>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "50px", background: "#0A0E1F", borderRadius: "28px", padding: "24px" }}>
          <div className="row g-4 align-items-stretch">
            {/* Image Box */}
            <div className="col-lg-5">
              <div
                style={{
                  background: "#000000",
                  borderRadius: "24px",
                  overflow: "hidden",
                  height: "100%",
                  minHeight: "520px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/ceylonix/contact-mail-pic.jpg"
                  alt="Contact Ceylonix"
                  style={{
                    width: "95%",
                    height: "95%",
                    objectFit: "cover",
                    borderRadius: "24px",
                  }}
                />
              </div>
            </div>

            {/* Form Box */}
            <div className="col-lg-7">
              <div
                style={{
                  background: "#000000",
                  borderRadius: "24px",
                  padding: "40px",
                  height: "100%",
                  minHeight: "520px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2 style={{ margin: "0 0 16px 0", color: "#fff", fontSize: "36px", fontWeight: 700 }}>Send a Message</h2>
                <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "28px", fontSize: "15px", lineHeight: 1.6 }}>
                  Tell us about your travel plans and preferences. Our team will get back to you within 24 hours with the best options for your journey.
                </p>

                <form onSubmit={(e) => e.preventDefault()} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div className="row g-3" style={{ marginBottom: "16px" }}>
                    <div className="col-md-6">
                      <label htmlFor="contactName" style={{ display: "block", color: "#fff", fontSize: "13px", marginBottom: "8px", fontWeight: 600 }}>
                        Full Name
                      </label>
                      <input
                        id="contactName"
                        type="text"
                        placeholder="Enter your full name"
                        style={{
                          width: "100%",
                          border: "1px solid rgba(255,255,255,0.15)",
                          background: "#1A1F3A",
                          color: "rgba(255,255,255,0.7)",
                          borderRadius: "8px",
                          padding: "12px 14px",
                          fontSize: "13px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="contactEmail" style={{ display: "block", color: "#fff", fontSize: "13px", marginBottom: "8px", fontWeight: 600 }}>
                        Email Address
                      </label>
                      <input
                        id="contactEmail"
                        type="email"
                        placeholder="Enter your email"
                        style={{
                          width: "100%",
                          border: "1px solid rgba(255,255,255,0.15)",
                          background: "#1A1F3A",
                          color: "rgba(255,255,255,0.7)",
                          borderRadius: "8px",
                          padding: "12px 14px",
                          fontSize: "13px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label htmlFor="contactMessage" style={{ display: "block", color: "#fff", fontSize: "13px", marginBottom: "8px", fontWeight: 600 }}>
                      Message
                    </label>
                    <textarea
                      id="contactMessage"
                      placeholder="Write your travel requirements"
                      rows={7}
                      style={{
                        width: "100%",
                        border: "1px solid rgba(255,255,255,0.15)",
                        background: "#1A1F3A",
                        color: "rgba(255,255,255,0.7)",
                        borderRadius: "8px",
                        padding: "12px 14px",
                        fontSize: "13px",
                        outline: "none",
                        resize: "vertical",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      alignSelf: "flex-start",
                      border: "none",
                      borderRadius: "6px",
                      background: "#fff",
                      color: "#E91E8C",
                      fontWeight: 700,
                      fontSize: "13px",
                      padding: "10px 20px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#F0F0F0";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#fff";
                    }}
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
