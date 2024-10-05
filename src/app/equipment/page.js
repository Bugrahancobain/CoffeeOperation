"use client";
import React, { useState } from 'react';
import "../styles/Equipment.css";
import Footer from '../components/Footer';

const categories = [
    { id: 1, name: 'Espresso Makineleri' },
    { id: 2, name: 'Filtre Kahve Makineleri' },
    { id: 3, name: 'Kahve Grinderleri' },
    // İhtiyacınıza göre daha fazla kategori ekleyebilirsiniz
];

const products = {
    'Espresso Makineleri': [
        { id: 1, name: 'Lamarzocco Makinesi', image: '/lamarzocco.webp', brand: 'Lamarzocco' },
        { id: 2, name: 'Cimbali Makinesi', image: '/cimbalimachine.webp', brand: 'Cimbali' },
        // Daha fazla ürün ekleyebilirsiniz
    ],
    'Filtre Kahve Makineleri': [
        { id: 3, name: 'Makine 3', image: '/simbo.png', brand: 'Brand A' },
        { id: 4, name: 'Makine 4', image: '/sunbean.jpeg', brand: 'Brand B' },
        // Daha fazla ürün ekleyebilirsiniz
    ],
    // Diğer kategoriler için ürünler ekleyebilirsiniz
};

function EquipmentPage() {
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
            <div className="equipment-page">
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
                                    {category.name === 'Espresso Makineleri' && (
                                        <>
                                            <div
                                                className={`brand ${selectedBrand === 'Lamarzocco' ? 'active' : ''}`}
                                                onClick={() => handleBrandClick('Lamarzocco')}
                                            >
                                                Lamarzocco
                                            </div>
                                            <div
                                                className={`brand ${selectedBrand === 'Cimbali' ? 'active' : ''}`}
                                                onClick={() => handleBrandClick('Cimbali')}
                                            >
                                                Cimbali
                                            </div>
                                        </>
                                    )}
                                    {category.name === 'Filtre Kahve Makineleri' && (
                                        <>
                                            <div
                                                className={`brand ${selectedBrand === 'Brand A' ? 'active' : ''}`}
                                                onClick={() => handleBrandClick('Brand A')}
                                            >
                                                Brand A
                                            </div>
                                            <div
                                                className={`brand ${selectedBrand === 'Brand B' ? 'active' : ''}`}
                                                onClick={() => handleBrandClick('Brand B')}
                                            >
                                                Brand B
                                            </div>
                                        </>
                                    )}
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

export default EquipmentPage;
