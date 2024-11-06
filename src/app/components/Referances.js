import React from "react";
import "../styles/ReferancesHome.css"; // CSS dosyasını dahil ediyoruz
import { FaInstagram } from "react-icons/fa"; // Instagram iconunu import ediyoruz

const images = [
  {
    src: "/arty.webp",
    link: "https://www.instagram.com/artycoffeebar/", // Instagram linki
  },
  {
    src: "/muscent.webp",
    link: "https://www.instagram.com/muscentgourmand/",
  },
  {
    src: "/packers.webp",
    link: "https://www.instagram.com/packerscoffeeco/",
  },
  {
    src: "/asley.webp",
    link: "https://www.instagram.com/asleycafeofficial/",
  },
  {
    src: "/soglad.webp",
    link: "https://www.instagram.com/sogladcoffee/",
  },
  {
    src: "/yirmikahve.webp",
    link: "https://www.instagram.com/20kahve/",
  },
  {
    src: "/veis.webp",
    link: "https://www.instagram.com/veisdondurmasi/",
  },
];

function ImageSlider() {
  return (
    <div className="slider">
      <div className="slider-wrapper animate">
        {images.map((image, index) => (
          <div className="slider-item" key={index}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <img src={image.src} alt={`Slide ${index}`} />
                <div className="overlay">
                  <FaInstagram className="instagram-icon" />
                </div>
              </div>
            </a>
          </div>
        ))}
        {/* Sonsuz döngü için tekrarlanan görüntüler */}
        {images.map((image, index) => (
          <div className="slider-item" key={`duplicate-${index}`}>
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <img src={image.src} alt={`Slide duplicate ${index}`} />
                <div className="overlay">
                  <FaInstagram className="instagram-icon" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
