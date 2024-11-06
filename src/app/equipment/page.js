"use client";
import React, { useState, useEffect, useRef } from "react";
import { database } from "../../../firebase"; // Firebase yapılandırma dosyanızı buraya ekleyin
import { ref, onValue } from "firebase/database"; // Realtime Database için gerekli fonksiyonlar
import "../styles/Equipment.css"; // Stil dosyanız
import Footer from "../components/Footer"; // Footer bileşeni

function EquipmentPage() {
  const [categories, setCategories] = useState([]); // Kategorileri tutmak için durum
  const [expandedCategory, setExpandedCategory] = useState(null); // Hangi kategorinin altındaki markaların açık olduğunu tutar
  const [expandedBrand, setExpandedBrand] = useState(null); // Hangi markanın altındaki ürünlerin açık olduğunu tutar
  const [showAllProducts, setShowAllProducts] = useState(true); // Tüm ürünleri gösterip göstermeme durumu
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar'ı açıp kapatma durumu
  const sidebarRef = useRef(null); // Sidebar referansı

  // Realtime Database'den verileri çekme
  useEffect(() => {
    const fetchCategories = () => {
      const categoriesRef = ref(database, "categories"); // Kategorileri çekeceğimiz referans
      onValue(categoriesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setCategories(data);
        } else {
          console.log("Kategoriler veritabanında mevcut değil.");
        }
      });
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Eğer sidebar dışında bir yere tıklandıysa menüyü kapat
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Temizlik yap (event listener'ı kaldır)
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  // Accordion mantığını değiştirme
  const toggleExpandCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    setExpandedBrand(null); // Kategoriye tıklanınca markayı sıfırla
    setShowAllProducts(false); // Kategori seçildiğinde "Tüm Ürünler" modundan çık
  };

  const toggleExpandBrand = (brandId) => {
    setExpandedBrand(expandedBrand === brandId ? null : brandId);
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
      <div className="equipment-page">
        {/* Hamburger Menü */}
        <div className="hamburger-menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          ☰
        </div>

        <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <h2>Kategoriler</h2>

          {/* Tüm Ürünler butonu */}
          <h3
            onClick={() => {
              setShowAllProducts(true);
              setExpandedCategory(null); // Kategoriyi sıfırla
              setExpandedBrand(null); // Markayı sıfırla
              setIsSidebarOpen(false); // Sidebar'ı kapat
            }}
            className="category"
          >
            Tüm Ekipmanlar
          </h3>

          {Object.entries(categories).map(([categoryId, category]) => (
            <div key={categoryId}>
              <h3
                onClick={() => {
                  toggleExpandCategory(categoryId);
                  setIsSidebarOpen(true); // Sidebar açık kalsın
                }}
                className="category"
              >
                {category.name}
              </h3>
              {expandedCategory === categoryId && (
                <div className="brands">
                  {category.brands ? (
                    Object.entries(category.brands).map(([brandId, brand]) => (
                      <div key={brandId}>
                        <h4
                          onClick={() => {
                            toggleExpandBrand(brandId);
                            setIsSidebarOpen(false); // Sidebar kapalı kalsın
                          }}
                          className="brand"
                        >
                          {brand.name}
                        </h4>
                      </div>
                    ))
                  ) : (
                    <p>Bu kategoriye ait marka bulunmuyor.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="product-display">
          {/* Ürünlerin grid şeklinde gösterileceği alan */}
          <h2>Ekipmanlar</h2>

          {showAllProducts ? (
            // Tüm Ürünler butonuna tıklanmışsa veya sayfa ilk yüklendiğinde tüm ürünleri göster
            <div className="product-grid">
              {getAllProducts().map(([productId, product]) => (
                <div key={productId} className="product-card" onClick={() => setIsSidebarOpen(false)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                </div>
              ))}
            </div>
          ) : expandedCategory && !expandedBrand ? (
            // Kategori seçilmişse ve marka seçilmemişse tüm markaların ürünlerini göster
            <div className="product-grid">
              {getAllProductsForCategory(categories[expandedCategory]).map(
                ([productId, product]) => (
                  <div key={productId} className="product-card" onClick={() => setIsSidebarOpen(false)}>
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
            categories[expandedCategory]?.brands[expandedBrand]?.products ? (
            // Marka seçilmişse sadece o markanın ürünlerini göster
            <div className="product-grid">
              {Object.entries(
                categories[expandedCategory].brands[expandedBrand].products
              ).map(([productId, product]) => (
                <div key={productId} className="product-card" onClick={() => setIsSidebarOpen(false)}>
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

export default EquipmentPage;
