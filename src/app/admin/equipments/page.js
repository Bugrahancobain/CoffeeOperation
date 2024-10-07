"use client";
import React, { useEffect, useState } from 'react';
import { database } from '../../../../firebase';
import { ref, onValue, set, push, remove, update } from "firebase/database";
import "./Euqipments.css";
import Footer from '@/app/components/Footer';
import AdminNavbar from '../adminComponent/AdminNavbar';
import "../styles/AdminPanel.css";

function AdminEquipmentPage() {
    const [categories, setCategories] = useState({});
    const [newCategory, setNewCategory] = useState('');
    const [newBrand, setNewBrand] = useState('');
    const [newProductName, setNewProductName] = useState('');
    const [newProductImage, setNewProductImage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [editProductId, setEditProductId] = useState(null);
    const [editedProductName, setEditedProductName] = useState('');
    const [editedProductImage, setEditedProductImage] = useState('');
    const [editedCategoryName, setEditedCategoryName] = useState('');
    const [editingCategory, setEditingCategory] = useState(null);
    const [editingBrand, setEditingBrand] = useState(null);
    const [editedBrandName, setEditedBrandName] = useState('');

    useEffect(() => {
        const categoriesRef = ref(database, 'categories');

        const unsubscribe = onValue(categoriesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setCategories(data);
            } else {
                console.log("Kategoriler veritabanında mevcut değil.");
            }
        });

        return () => unsubscribe();
    }, []);

    const addCategory = () => {
        const categoryTrimmed = newCategory.trim();
        if (categoryTrimmed === '') return;

        const categoryRef = ref(database, `categories/${categoryTrimmed}`);
        set(categoryRef, categoryTrimmed)
            .then(() => setNewCategory(''))
            .catch((error) => alert("Kategori eklenirken bir hata oluştu: " + error.message));
    };

    const addBrand = () => {
        if (!selectedCategory || newBrand.trim() === '') return;
        const brandRef = ref(database, `categories/${selectedCategory}/brands/${newBrand}`);
        set(brandRef, { name: newBrand })
            .then(() => setNewBrand(''))
            .catch((error) => console.error("Marka eklenirken hata:", error));
    };

    const addProduct = () => {
        if (!selectedCategory || !selectedBrand || newProductName.trim() === '') return;
        const productsRef = push(ref(database, `categories/${selectedCategory}/brands/${selectedBrand}`));
        set(productsRef, { name: newProductName, image: newProductImage })
            .then(() => {
                setNewProductName('');
                setNewProductImage('');
            })
            .catch((error) => console.error("Ürün eklenirken hata:", error));
    };

    const updateProduct = (category, brand, productId, updatedProduct) => {
        const productRef = ref(database, `categories/${category}/brands/${brand}/${productId}`);
        update(productRef, updatedProduct)
            .catch((error) => console.error("Ürün güncellenirken hata:", error));
    };

    const deleteProduct = (category, brand, productId) => {
        const productRef = ref(database, `categories/${category}/brands/${brand}/${productId}`);
        remove(productRef)
            .catch((error) => console.error("Ürün silinirken hata:", error));
    };

    const handleEditProduct = (productId, product) => {
        setEditProductId(productId);
        setEditedProductName(product.name);
        setEditedProductImage(product.image);
    };

    const handleSaveEdit = (category, brand, productId) => {
        const updatedProduct = {
            name: editedProductName,
            image: editedProductImage,
        };
        updateProduct(category, brand, productId, updatedProduct);
        setEditProductId(null);
    };

    const updateCategory = (category) => {
        const categoryRef = ref(database, `categories/${category}`);
        update(categoryRef, editedCategoryName)
            .catch((error) => console.error("Kategori güncellenirken hata:", error));
        setEditingCategory(null);
    };

    const deleteCategory = (category) => {
        const categoryRef = ref(database, `categories/${category}`);
        remove(categoryRef)
            .catch((error) => console.error("Kategori silinirken hata:", error));
    };

    const updateBrand = (category, brand) => {
        const brandRef = ref(database, `categories/${category}/brands/${brand}`);
        update(brandRef, editedBrandName)
            .catch((error) => console.error("Marka güncellenirken hata:", error));
        setEditingBrand(null);
    };

    const deleteBrand = (category, brand) => {
        const brandRef = ref(database, `categories/${category}/brands/${brand}`);
        remove(brandRef)
            .catch((error) => console.error("Marka silinirken hata:", error));
    };

    return (
        <div>
            <div className='container'>
                <AdminNavbar />
                <div style={{ textAlign: "center", width: "80%" }}>
                    <div className="admin-equipment-page">
                        <h1>Ekipman Yönetimi</h1>

                        <div className="add-category">
                            <h2>Yeni Kategori Ekle</h2>
                            <input
                                type="text"
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                placeholder="Kategori Adı"
                            />
                            <button onClick={addCategory}>Ekle</button>
                        </div>

                        <div className="category-brand-selection">
                            <h2>Kategoriler</h2>

                            <div>
                                {Object.keys(categories).map((category) => (
                                    <div key={category} style={{ border: "1px solid black", padding: 20, margin: 10, textAlign: "center" }} className="category-item">
                                        {editingCategory === category ? (
                                            <div>
                                                <input
                                                    type="text"
                                                    value={editedCategoryName}
                                                    onChange={(e) => setEditedCategoryName(e.target.value)}
                                                />
                                                <button onClick={() => updateCategory(category)}>Kaydet</button>
                                                <button onClick={() => setEditingCategory(null)}>İptal</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <h3 onClick={() => setSelectedCategory(category)}>{category}</h3>
                                                <button onClick={() => { setEditingCategory(category); setEditedCategoryName(category); }}>Düzenle</button>
                                                <button onClick={() => deleteCategory(category)}>Sil</button>
                                            </div>
                                        )}
                                        {selectedCategory === category && (
                                            <div className="brands">
                                                <h4>Markalar</h4>
                                                {categories[category].brands
                                                    ? Object.keys(categories[category].brands).map((brand) => (
                                                        <div key={brand} style={{ border: "1px solid blue", padding: 20, margin: 10, textAlign: "center" }} className="brand-item">
                                                            {editingBrand === brand ? (
                                                                <div>
                                                                    <input
                                                                        type="text"
                                                                        value={editedBrandName}
                                                                        onChange={(e) => setEditedBrandName(e.target.value)}
                                                                    />
                                                                    <button onClick={() => updateBrand(category, brand)}>Kaydet</button>
                                                                    <button onClick={() => setEditingBrand(null)}>İptal</button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    {brand}
                                                                    <button onClick={() => { setEditingBrand(brand); setEditedBrandName(brand); }}>Düzenle</button>
                                                                    <button onClick={() => deleteBrand(category, brand)}>Sil</button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))
                                                    : "Marka mevcut değil"}

                                                <div className="add-brand">
                                                    <input
                                                        type="text"
                                                        value={newBrand}
                                                        onChange={(e) => setNewBrand(e.target.value)}
                                                        placeholder="Yeni Marka"
                                                    />
                                                    <button onClick={addBrand}>Marka Ekle</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}</div>

                            {selectedCategory && selectedBrand && (
                                <div className="add-product">
                                    <h2>{selectedBrand} İçin Yeni Ürün Ekle</h2>
                                    <input
                                        type="text"
                                        value={newProductName}
                                        onChange={(e) => setNewProductName(e.target.value)}
                                        placeholder="Ürün İsmi"
                                    />
                                    <input
                                        type="text"
                                        value={newProductImage}
                                        onChange={(e) => setNewProductImage(e.target.value)}
                                        placeholder="Ürün Resmi URL"
                                    />
                                    <button onClick={addProduct}>Ürün Ekle</button>
                                </div>
                            )}

                            {selectedCategory && selectedBrand && (
                                <div className="products">
                                    <h2>{selectedBrand} Ürünleri</h2>
                                    {categories[selectedCategory]?.brands[selectedBrand]?.map((product, index) => (
                                        <div key={index}>
                                            {editProductId === product.id ? (
                                                <div>
                                                    <input
                                                        type="text"
                                                        value={editedProductName}
                                                        onChange={(e) => setEditedProductName(e.target.value)}
                                                    />
                                                    <input
                                                        type="text"
                                                        value={editedProductImage}
                                                        onChange={(e) => setEditedProductImage(e.target.value)}
                                                    />
                                                    <button onClick={() => handleSaveEdit(selectedCategory, selectedBrand, product.id)}>Kaydet</button>
                                                    <button onClick={() => setEditProductId(null)}>İptal</button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h4>{product.name}</h4>
                                                    <img src={product.image} alt={product.name} style={{ width: "100px", height: "100px" }} />
                                                    <button onClick={() => handleEditProduct(product.id, product)}>Düzenle</button>
                                                    <button onClick={() => deleteProduct(selectedCategory, selectedBrand, product.id)}>Sil</button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminEquipmentPage;
