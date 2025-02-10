import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <h1 className="logo">SmartHiring</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1 className="fade-in">Welcome to Our Platform</h1>
        <p className="slide-up">Connecting talent with opportunities.</p>
        <button className="cta-button bounce">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-card fade-in">
          <img src="https://elements-resized.envatousercontent.com/elements-video-cover-images/video-previews/3b33a99f-be5e-45a3-acad-8f2a6de3db0c/e00f3efa-19e5-4927-b426-bbbaebb0241f/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=f56901f4eb03a7f17664b1ab6614e007ba9b19ae1ea02b4b83cd648a9ac53f39"></img>
          <h2>Fast Hiring</h2>
          <p>Find the right talent instantly.</p>
        </div>
        <div className="feature-card fade-in">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/secure-payment-illustration-download-in-svg-png-gif-file-formats--paying-through-credit-card-debit-online-shopping-website-purchasing-shop-e-commerce-pack-illustrations-3581451.png"></img>
          <h2>Secure Payments</h2>
          <p>Safe and reliable transactions.</p>
        </div>
        <div className="feature-card fade-in">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXuG4hWOUq58BtSppRtwnP-xSs2Up8XVwGvumH2LzaOxPS6HBT_98YBlIeeOF-N5DOsk&usqp=CAU"></img>
          <h2>Verified Professionals</h2>
          <p>Work with trusted experts.</p>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 BrandName. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;
