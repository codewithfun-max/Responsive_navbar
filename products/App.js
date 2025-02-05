import React, { useState, useEffect } from "react";
import "./style.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>My Website</h1>
    <ul>
      <li><a href="#product">Product</a></li>
      <li><a href="#countdown">Countdown</a></li>
      <li><a href="#gallery">Gallery</a></li>
    </ul>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 My Website. All rights reserved.</p>
  </footer>
);


const CountdownTimer = ({ targetTime }) => {
  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <div id="countdown" className="countdown-container">Sale Expired!</div>;
  }

  return (
    <div id="countdown" className="countdown-container">
      <h2>Limited Time Offer</h2>
      <div className="countdown">
        <span>{String(timeLeft.hours).padStart(2, "0")}h</span> :
        <span>{String(timeLeft.minutes).padStart(2, "0")}m</span> :
        <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="p">
    <div id="product" className="product-card">
      <div className="product-image">
        <img src="https://images.meesho.com/images/products/396661684/mldrx_512.webp" alt="Product" />
      </div>
      <div className="product-info">
        <h3>Women Casual Cool Sneakers</h3>
        <p>High-quality sneakers for everyday comfort.</p>
        <span className="price">$49.99</span>
        <button className="buy-button">Buy Now</button>
      </div>
      
    </div>
    <div id="product" className="product-card">
      <div className="product-image">
        <img src="https://images.fashiontiy.com/products/T103AD7058/color_1.jpg?x-oss-process=image/interlace,1/format,webp" alt="Product" />
      </div>
      <div className="product-info">
        <h3>Women Casual Lace-Up Wedge Heel Sneaker</h3>
        <p>High-quality sneakers for everyday comfort.</p>
        <span className="price">$40.99</span>
        <button className="buy-button">Buy Now</button>
      </div>
      
    </div>
      <div id="product" className="product-card">
      <div className="product-image">
        <img src="https://images-cdn.ubuy.com.sa/658d3200fac42e378b4957d9-yotami-womens-boots-2021-autumn-and.jpg" alt="Product" />
      </div>
      <div className="product-info">
        <h3>Women's Thick-soled Leather Short Boots</h3>
        <p>High-quality boots for everyday comfort.</p>
        <span className="price">$60.99</span>
        <button className="buy-button">Buy Now</button>
      </div>
      
    </div>
    </div>
  );
};

const ImageGallery = () => {
  const images = [
    { id: 1, category: "Nature", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPIfiGgUML8G3ZqsNLHfaCnZK3I5g4tJabQ&s" },
    { id: 2, category: "Technology", src: "https://wallpapers.com/images/hd/technology-backlit-keyboard-lrvr9sja6g4neuzn.jpg" },
    { id: 3, category: "Art", src: "https://t3.ftcdn.net/jpg/07/03/02/14/360_F_703021495_SJP6mr793gn03A09yT1G9g0DE00ATY64.jpg" },
    { id: 4, category: "Nature", src: "https://static.vecteezy.com/system/resources/thumbnails/040/697/838/small_2x/ai-generated-majestic-mountain-range-reflects-tranquil-autumn-sunset-over-serene-pond-generated-by-ai-photo.jpg" },
    { id: 5, category: "Technology", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoOvL8rPE7lcDUcefx-Ku5IONZABEdiMcYg&s" },
    { id: 6, category: "Art", src: "https://i.pinimg.com/736x/6a/3a/9a/6a3a9aa650f610536f40bedc3e988365.jpg" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredImages =
    selectedCategory === "All" ? images : images.filter((img) => img.category === selectedCategory);

  return (
    <div id="gallery" className="gallery-container">
      <div className="filter-buttons">
        {["All", "Nature", "Technology", "Art"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="image-grid">
        {filteredImages.map((image) => (
          <img key={image.id} src={image.src} alt={image.category} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const targetDate = new Date().getTime() + 2 * 60 * 60 * 1000;
  return (
    <div>
      <Navbar />
      <div className="container">
        <ProductCard />
        <CountdownTimer targetTime={targetDate} />
        <ImageGallery />
      </div>
      <Footer />
    </div>
  );
};

export default App;
