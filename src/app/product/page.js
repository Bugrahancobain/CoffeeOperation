"use client";
import React, { useState } from 'react';
import "../styles/ProductsPage.css";
import Footer from '../components/Footer';

const categories = [
    { id: 1, name: 'Güney Amerika Kahveleri' },
    { id: 2, name: 'Asya Kahveleri' },
    { id: 3, name: 'Arabica Çekirdekleri' },
    { id: 4, name: 'Türk Kahveleri' },
    { id: 5, name: 'Şuruplar' },
    // İhtiyacınıza göre daha fazla kategori ekleyebilirsiniz
];

const products = {
    'Güney Amerika Kahveleri': [
        { id: 1, name: 'Brezilya Santos', image: '/kahvepaketi.jpeg', brand: 'Brezilya' },
        { id: 2, name: 'Kolombiya Supremo', image: '/kahvepaketi.jpeg', brand: 'Kolombiya' },
        // Daha fazla ürün ekleyebilirsiniz
    ],
    'Asya Kahveleri': [
        { id: 3, name: 'Sumatra Mandheling', image: '/kahvepaketi.jpeg', brand: 'Sumatra' },
        { id: 4, name: 'Vietnam Robusta', image: '/kahvepaketi.jpeg', brand: 'Vietnam' },
        // Daha fazla ürün ekleyebilirsiniz
    ],
    'Arabica Çekirdekleri': [
        { id: 5, name: 'Yemen Mocca', image: '/kahvepaketi.jpeg', brand: 'Yemen' },
        { id: 6, name: 'Etiyopya Yirgacheffe', image: '/kahvepaketi.jpeg', brand: 'Etiyopya' },
        // Daha fazla ürün ekleyebilirsiniz
    ],
    'Türk Kahveleri': [
        { id: 7, name: 'Çekirdek Türk Kahvesi', image: '/kahvepaketi.jpeg', brand: 'Türkiye' },
        { id: 8, name: 'Kavrulmuş Türk Kahvesi', image: '/kahvepaketi.jpeg', brand: 'Türkiye' },
        // Daha fazla ürün ekleyebilirsiniz
    ],
    'Şuruplar': [
        { id: 9, name: 'Vanilya Şurubu', image: '/surup.webp', brand: 'Şurup Markası A' },
        { id: 10, name: 'Caramel Şurubu', image: '/surup.webp', brand: 'Şurup Markası B' },
        // Daha fazla ürün ekleyebilirsiniz
    ],
};

function CoffeePage() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showAll, setShowAll] = useState(true);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [brandsVisibility, setBrandsVisibility] = useState({}); // Markaların görünürlük durumu

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setShowAll(false);
        setSelectedBrand(null); // Yeni kategori seçildiğinde markayı sıfırla

        // Markaların görünürlüğünü yönet
        setBrandsVisibility((prev) => ({
            ...prev,
            [category]: !prev[category] // Seçilen kategori için görünürlüğü ters çevir
        }));
    };

    const handleShowAllClick = () => {
        setShowAll(true);
        setSelectedBrand(null); // Tümünü gösterirken markayı sıfırla
        setBrandsVisibility({}); // Tüm kategorileri gizle
    };

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand === selectedBrand ? null : brand); // Eğer seçili markaya tekrar tıklanırsa sıfırlama
    };

    const displayedProducts = showAll ? Object.values(products).flat() : products[selectedCategory];
    const filteredProducts = selectedBrand ? displayedProducts.filter(product => product.brand === selectedBrand) : displayedProducts;

    return (
        <div>
            <div className="coffee-page">
                <div className="sidebar">
                    <h2>Kategoriler</h2>
                    <div
                        className={`category ${showAll ? 'active' : ''}`}
                        onClick={handleShowAllClick}
                    >
                        Tümünü Göster
                    </div>
                    {categories.map((category) => (
                        <div key={category.id}>
                            <div
                                className={`category ${selectedCategory === category.name ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                {category.name}
                            </div>
                            {/* Kategoriye tıklandığında markaları göster */}
                            {brandsVisibility[category.name] && (
                                <div className="brands">
                                    {/* Burada markaları tanımlayabilirsiniz. Örneğin: */}
                                    {category.name === 'Güney Amerika Kahveleri' && (
                                        <>
                                            <div
                                                className={`brand ${selectedBrand === 'Brezilya' ? 'active' : ''}`}
                                                onClick={() => handleBrandClick('Brezilya')}
                                            >
                                                Brezilya
                                            </div>
                                            <div
                                                className={`brand ${selectedBrand === 'Kolombiya' ? 'active' : ''}`}
                                                onClick={() => handleBrandClick('Kolombiya')}
                                            >
                                                Kolombiya
                                            </div>
                                        </>
                                    )}
                                    {category.name === 'Asya Kahveleri' && (
                                        <>
                                            <div
                                                className={`brand ${selectedBrand === 'Sumatra' ? 'active' : ''}`}
                                                onClick={() => handleBrandClick('Sumatra')}
                                            >
                                                Sumatra
                                            </div>
                                            <div
                                                className={`brand ${selectedBrand === 'Vietnam' ? 'active' : ''}`}
                                                onClick={() => handleBrandClick('Vietnam')}
                                            >
                                                Vietnam
                                            </div>
                                        </>
                                    )}
                                    {/* Diğer kategoriler için markaları buraya ekleyin */}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="product-display">
                    <h2 style={{ textAlign: "center" }}>{showAll ? 'Tüm Ürünlerimiz' : selectedCategory}</h2>
                    <div className="product-grid">
                        {filteredProducts?.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} />
                                <h3 style={{ fontSize: "13px" }}>{product.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CoffeePage;
