"use client";
import React, { useState, useEffect, useRef } from "react";
import { database } from "../../../firebase"; // Firebase yapılandırma dosyanızı buraya ekleyin
import { ref, onValue } from "firebase/database"; // Realtime Database için gerekli fonksiyonlar
import { FaBars } from "react-icons/fa"; // Hamburger menü ikonu
import "../styles/ProductsPage.css"; // Stil dosyanız
import Footer from "../components/Footer"; // Footer bileşeni

function ProductsPage() {
  const [categories, setCategories] = useState([]); // Ürünleri tutmak için durum
  const [expandedProduct, setExpandedProduct] = useState(null); // Hangi ürünlerin açık olduğunu tutar
  const [expandedBrand, setExpandedBrand] = useState(null); // Hangi markanın açık olduğunu tutar
  const [showAllProducts, setShowAllProducts] = useState(true); // Tüm ürünleri gösterip göstermeme durumu
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar'ın açık olup olmadığını kontrol eden durum
  const sidebarRef = useRef(null); // Sidebar referansı

  // Realtime Database'den verileri çekme
  useEffect(() => {
    const fetchCategories = () => {
      const categoriesRef = ref(database, "products"); // Ürünleri çekeceğimiz referans
      onValue(categoriesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setCategories(data);
        } else {
          console.log("Ürünler veritabanında mevcut değil.");
        }
      });
    };

    fetchCategories();
  }, []);

  // Accordion mantığını değiştirme
  const toggleExpandProduct = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
    setExpandedBrand(null); // Ürüne tıklanınca markayı sıfırla
    setShowAllProducts(false); // Ürün seçildiğinde "Tüm Ürünler" modundan çık
  };

  const toggleExpandBrand = (brandId) => {
    setExpandedBrand(expandedBrand === brandId ? null : brandId);
    closeMenu(); // Sidebar'ı kapat
  };

  // Menü dışına tıklayınca sidebar'ı kapatan fonksiyon
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeMenu(); // Eğer tıklama sidebar dışında olursa menüyü kapat
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick); // Temizlik
    };
  }, [isSidebarOpen]);

  // Menü kapatma fonksiyonu
  const closeMenu = () => {
    setIsSidebarOpen(false);
  };

  // Tüm markaların ürünlerini toplayan fonksiyon
  const getAllProductsForCategory = (category) => {
    let allProducts = [];
    if (category.brands) {
      Object.entries(category.brands).forEach(([brandId, brand]) => {
        if (brand.products) {
          allProducts = [...allProducts, ...Object.entries(brand.products)];
        }
      });
    }
    return allProducts;
  };

  // Tüm kategorilere ait tüm ürünleri toplayan fonksiyon
  const getAllProducts = () => {
    let allProducts = [];
    Object.entries(categories).forEach(([categoryId, category]) => {
      allProducts = [...allProducts, ...getAllProductsForCategory(category)];
    });
    return allProducts;
  };

  // Sayfa ilk yüklendiğinde tüm ürünlerin gösterilmesi
  useEffect(() => {
    setShowAllProducts(true); // Sayfa yüklendiğinde tüm ürünler gösterilsin
  }, []);

  return (
    <div>
      <div className="products-page">
        {/* Hamburger Menü */}
        <div className="hamburger-menu">
          <FaBars onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>

        {/* Sidebar - Küçük ekranlarda kapatılabilir olacak */}
        <div
          ref={sidebarRef}
          className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        >
          <h2>Kategoriler</h2>

          {/* Tüm Ürünler butonu */}
          <h3
            onClick={() => {
              setShowAllProducts(true);
              setExpandedProduct(null); // Ürünü sıfırla
              setExpandedBrand(null); // Markayı sıfırla
              closeMenu(); // Sidebar'ı kapat
            }}
            className="category"
          >
            Tüm Ürünler
          </h3>

          {Object.entries(categories).map(([categoryId, category]) => (
            <div key={categoryId}>
              <h3
                onClick={() => toggleExpandProduct(categoryId)}
                className="category"
              >
                {category.name}
              </h3>
              {expandedProduct === categoryId && (
                <div className="brands">
                  {category.brands ? (
                    Object.entries(category.brands).map(([brandId, brand]) => (
                      <div key={brandId}>
                        <h4
                          onClick={() => toggleExpandBrand(brandId)}
                          className="brand"
                        >
                          {brand.name}
                        </h4>
                      </div>
                    ))
                  ) : (
                    <p>Bu ürüne ait marka bulunmuyor.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Ürünlerin gösterileceği alan */}
        <div className="product-display">
          <h2>Ürünler</h2>

          {showAllProducts ? (
            <div className="product-grid">
              {getAllProducts().map(([productId, product]) => (
                <div key={productId} className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>
          ) : expandedProduct && !expandedBrand ? (
            <div className="product-grid">
              {getAllProductsForCategory(categories[expandedProduct]).map(
                ([productId, product]) => (
                  <div key={productId} className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                    <h3>{product.name}</h3>
                  </div>
                )
              )}
            </div>
          ) : expandedBrand &&
            categories[expandedProduct]?.brands[expandedBrand]?.products ? (
            <div className="product-grid">
              {Object.entries(
                categories[expandedProduct].brands[expandedBrand].products
              ).map(([productId, product]) => (
                <div key={productId} className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>
          ) : (
            <p>Seçili markada ürün bulunmuyor.</p>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductsPage;
