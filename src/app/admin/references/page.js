"use client";
import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase";
import { ref, onValue, set, remove, push, update } from "firebase/database";
import "./ReferancesAdmin.css";
import "../styles/AdminPanel.css";
import AdminNavbar from "../adminComponent/AdminNavbar";

const ReferencesAdmin = () => {
  const [references, setReferences] = useState([]);
  const [newReference, setNewReference] = useState({
    imageUrl: "",
    instagramLink: "",
  });
  const [editReference, setEditReference] = useState(null);

  useEffect(() => {
    const referenceRef = ref(db, "references");
    onValue(referenceRef, (snapshot) => {
      const data = snapshot.val();
      const loadedReferences = [];
      if (data) {
        Object.keys(data).forEach((key) => {
          loadedReferences.push({ id: key, ...data[key] });
        });
        setReferences(loadedReferences);
      }
    });
  }, []);

  const handleAddReference = async () => {
    if (newReference.instagramLink && newReference.imageUrl) {
      const referenceRef = ref(db, "references");
      const newReferenceRef = push(referenceRef);
      await set(newReferenceRef, {
        instagramLink: newReference.instagramLink,
        imageUrl: newReference.imageUrl,
      });
      setNewReference({ imageUrl: "", instagramLink: "" });
    } else {
      console.error("Lütfen tüm alanları doldurun.");
    }
  };

  const handleDeleteReference = (id) => {
    const referenceRef = ref(db, `references/${id}`);
    remove(referenceRef);
  };

  const handleEditReference = (reference) => {
    setEditReference(reference);
  };

  const handleUpdateReference = async () => {
    if (editReference.instagramLink && editReference.imageUrl) {
      const referenceRef = ref(db, `references/${editReference.id}`);
      await update(referenceRef, {
        instagramLink: editReference.instagramLink,
        imageUrl: editReference.imageUrl,
      });
      setEditReference(null);
    } else {
      console.error("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div className="container">
      <AdminNavbar />
      <div className="mainContent">
        <h1>Referans Ayarları</h1>
        <div className="addReference">
          <input
            type="text"
            placeholder="Resim URL'si"
            value={newReference.imageUrl}
            onChange={(e) =>
              setNewReference({ ...newReference, imageUrl: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Instagram Linki"
            value={newReference.instagramLink}
            onChange={(e) =>
              setNewReference({
                ...newReference,
                instagramLink: e.target.value,
              })
            }
          />
          <div className="addRefBtn">
            <button onClick={handleAddReference}>Referans Ekle</button>
          </div>
        </div>

        <div className="referencesList">
          {references.map((reference) => (
            <div key={reference.id} className="referenceItem">
              <a
                href={reference.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={reference.imageUrl} alt="Reference" />
              </a>
              <button onClick={() => handleDeleteReference(reference.id)}>
                Sil
              </button>
              <button onClick={() => handleEditReference(reference)}>
                Düzenle
              </button>
            </div>
          ))}
        </div>

        {editReference && (
          <div className="editReference">
            <h2>Referansı Düzenle</h2>
            <input
              type="text"
              placeholder="Resim URL'si"
              value={editReference.imageUrl}
              onChange={(e) =>
                setEditReference({ ...editReference, imageUrl: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Instagram Linki"
              value={editReference.instagramLink}
              onChange={(e) =>
                setEditReference({
                  ...editReference,
                  instagramLink: e.target.value,
                })
              }
            />
            <button onClick={handleUpdateReference}>Güncelle</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReferencesAdmin;
