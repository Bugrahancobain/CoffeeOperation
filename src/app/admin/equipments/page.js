"use client";
import React, { useEffect, useState } from 'react';
import { database } from '../../../../firebase';
import { ref, onValue, set, push, remove, update } from "firebase/database";
import "./Euqipments.css";
import Footer from '@/app/components/Footer';
import AdminNavbar from '../adminComponent/AdminNavbar';
import "../styles/AdminPanel.css";
import { useAuthRedirect } from "../userCheck";

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
    const { user, loading } = useAuthRedirect();

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

    if (loading) {
        return <p>Yükleniyor...</p>; // Kullanıcı doğrulama sırasında yükleniyor ekranı gösterin
    }

    if (!user) {
        return null; // Eğer kullanıcı doğrulanmadıysa hiçbir şey göstermeyin (zaten yönlendiriliyor)
    }

    // Kategori Ekleme
    const addCategory = () => {
        const categoryTrimmed = newCategory.trim();
        if (categoryTrimmed === '') return;

        const categoryRef = push(ref(database, `categories`));
        set(categoryRef, { name: categoryTrimmed })
            .then(() => setNewCategory(''))
            .catch((error) => alert("Kategori eklenirken bir hata oluştu: " + error.message));
    };

    // Kategori Güncelleme
    const updateCategory = (categoryId) => {
        const categoryRef = ref(database, `categories/${categoryId}`);
        update(categoryRef, { name: editedCategoryName })
            .then(() => {
                setEditedCategoryName(''); // Güncellemeden sonra inputu temizle
                setEditingCategory(null); // Düzenleme modundan çık
            })
            .catch((error) => console.error("Kategori güncellenirken hata:", error));
    };

    // Kategori Silme
    const deleteCategory = (categoryId) => {
        const categoryRef = ref(database, `categories/${categoryId}`);
        remove(categoryRef)
            .catch((error) => console.error("Kategori silinirken hata:", error));
    };

    // Marka Ekleme
    const addBrand = () => {
        if (!selectedCategory || newBrand.trim() === '') return;
        const brandRef = push(ref(database, `categories/${selectedCategory}/brands`));
        set(brandRef, { name: newBrand })
            .then(() => setNewBrand(''))
            .catch((error) => console.error("Marka eklenirken hata:", error));
    };

    // Marka Güncelleme
    const updateBrand = (categoryId, brandId) => {
        const brandRef = ref(database, `categories/${categoryId}/brands/${brandId}`);
        update(brandRef, { name: editedBrandName })
            .then(() => {
                setEditedBrandName(''); // Güncellemeden sonra inputu temizle
                setEditingBrand(null); // Düzenleme modundan çık
            })
            .catch((error) => console.error("Marka güncellenirken hata:", error));
    };

    // Marka Silme
    const deleteBrand = (categoryId, brandId) => {
        const brandRef = ref(database, `categories/${categoryId}/brands/${brandId}`);
        remove(brandRef)
            .catch((error) => console.error("Marka silinirken hata:", error));
    };

    // Ürün Ekleme
    const addProduct = () => {
        if (!selectedCategory || !selectedBrand || newProductName.trim() === '') return;
        const productsRef = push(ref(database, `categories/${selectedCategory}/brands/${selectedBrand}/products`));
        set(productsRef, { name: newProductName, image: newProductImage })
            .then(() => {
                setNewProductName('');
                setNewProductImage('');
            })
            .catch((error) => console.error("Ürün eklenirken hata:", error));
    };

    // Ürün Güncelleme
    const updateProduct = (categoryId, brandId, productId, updatedProduct) => {
        const productRef = ref(database, `categories/${categoryId}/brands/${brandId}/products/${productId}`);
        update(productRef, updatedProduct)
            .catch((error) => console.error("Ürün güncellenirken hata:", error));
    };

    // Ürün Silme
    const deleteProduct = (categoryId, brandId, productId) => {
        const productRef = ref(database, `categories/${categoryId}/brands/${brandId}/products/${productId}`);
        remove(productRef)
            .catch((error) => console.error("Ürün silinirken hata:", error));
    };

    const handleEditProduct = (productId, product) => {
        setEditProductId(productId);
        setEditedProductName(product.name);
        setEditedProductImage(product.image);
    };

    const handleSaveEdit = (categoryId, brandId, productId) => {
        const updatedProduct = {
            name: editedProductName,
            image: editedProductImage,
        };
        updateProduct(categoryId, brandId, productId, updatedProduct);
        setEditProductId(null);
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
                                style={{ borderRadius: "4px" }}
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
                                {Object.entries(categories).map(([categoryId, category]) => (
                                    <div key={categoryId} style={{ border: "1px solid black", padding: 20, margin: 10, textAlign: "center" }} className="category-item">
                                        {editingCategory === categoryId ? (
                                            <div>
                                                <input
                                                    style={{ borderRadius: "4px" }}
                                                    type="text"
                                                    value={editedCategoryName}
                                                    onChange={(e) => setEditedCategoryName(e.target.value)}
                                                    placeholder="Kategori Adını Düzenle"
                                                />
                                                <button onClick={() => updateCategory(categoryId)}>Kaydet</button>
                                                <button onClick={() => setEditingCategory(null)}>İptal</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <h3 style={{ cursor: "pointer" }} onClick={() => setSelectedCategory(categoryId)}>{category.name}</h3>
                                                <button onClick={() => setEditingCategory(categoryId)}>Düzenle</button>
                                                <button onClick={() => deleteCategory(categoryId)}>Sil</button>
                                            </div>
                                        )}

                                        {selectedCategory === categoryId && (
                                            <div className="brands">
                                                <h4>Markalar</h4>
                                                {category.brands
                                                    ? Object.entries(category.brands).map(([brandId, brand]) => (
                                                        <div key={brandId} style={{ border: "1px solid blue", padding: 20, margin: 10, textAlign: "center" }} className="brand-item" onClick={() => setSelectedBrand(brandId)}>
                                                            {editingBrand === brandId ? (
                                                                <div>
                                                                    <input
                                                                        style={{ borderRadius: "4px" }}
                                                                        type="text"
                                                                        value={editedBrandName}
                                                                        onChange={(e) => setEditedBrandName(e.target.value)}
                                                                        placeholder="Marka Adını Düzenle"
                                                                    />
                                                                    <button onClick={() => updateBrand(categoryId, brandId)}>Kaydet</button>
                                                                    <button onClick={() => setEditingBrand(null)}>İptal</button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <h5 style={{ cursor: "pointer" }}>{brand.name}</h5>
                                                                    <button onClick={() => setEditingBrand(brandId)}>Düzenle</button>
                                                                    <button onClick={() => deleteBrand(categoryId, brandId)}>Sil</button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))
                                                    : <p>Bu kategoride marka yok.</p>}
                                                <div className="add-brand">
                                                    <input
                                                        style={{ borderRadius: "4px" }}
                                                        type="text"
                                                        value={newBrand}
                                                        onChange={(e) => setNewBrand(e.target.value)}
                                                        placeholder="Yeni Marka Adı"
                                                    />
                                                    <button onClick={addBrand}>Ekle</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="add-product">
                            <h2>Yeni Ürün Ekle</h2>
                            <input
                                style={{ borderRadius: "4px" }}
                                type="text"
                                value={newProductName}
                                onChange={(e) => setNewProductName(e.target.value)}
                                placeholder="Ürün Adı"
                            />
                            <input
                                style={{ borderRadius: "4px" }}
                                type="text"
                                value={newProductImage}
                                onChange={(e) => setNewProductImage(e.target.value)}
                                placeholder="Ürün Resim URL'si"
                            />
                            <button onClick={addProduct}>Ekle</button>
                        </div>

                        {selectedCategory && selectedBrand && (
                            <div className="products">
                                <h3>{categories[selectedCategory]?.name} - {categories[selectedCategory]?.brands[selectedBrand]?.name} Ürünleri</h3>
                                {categories[selectedCategory].brands[selectedBrand].products
                                    ? Object.entries(categories[selectedCategory].brands[selectedBrand].products).map(([productId, product]) => (
                                        <div key={productId} style={{ border: "1px solid red", padding: 20, margin: 10, textAlign: "center" }} className="product-item">
                                            {editProductId === productId ? (
                                                <div>
                                                    <input
                                                        style={{ borderRadius: "4px" }}
                                                        type="text"
                                                        value={editedProductName}
                                                        onChange={(e) => setEditedProductName(e.target.value)}
                                                        placeholder="Ürün Adını Düzenle"
                                                    />
                                                    <input
                                                        style={{ borderRadius: "4px" }}
                                                        type="text"
                                                        value={editedProductImage}
                                                        onChange={(e) => setEditedProductImage(e.target.value)}
                                                        placeholder="Ürün Resim URL'sini Düzenle"
                                                    />
                                                    <button onClick={() => handleSaveEdit(selectedCategory, selectedBrand, productId)}>Kaydet</button>
                                                    <button onClick={() => setEditProductId(null)}>İptal</button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <h5 style={{ cursor: "pointer" }}>{product.name}</h5>
                                                    <img src={product.image} alt={product.name} style={{ width: "100px" }} />
                                                    <button onClick={() => handleEditProduct(productId, product)}>Düzenle</button>
                                                    <button onClick={() => deleteProduct(selectedCategory, selectedBrand, productId)}>Sil</button>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                    : <p>Bu markaya ait ürün yok.</p>}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminEquipmentPage;
