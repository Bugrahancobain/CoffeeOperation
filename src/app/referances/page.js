import { ref, get } from "firebase/database";
import { database } from "../../../firebase"; // Firebase ayarlarını buraya ekleyin
import "../styles/Referances.css";
import Footer from "../components/Footer";
import { FaInstagram } from "react-icons/fa";

// Veri çekme işlemi async bir fonksiyon olarak direkt bileşen içinde yapılacak
export default async function Pages() {
  let references = [];
  try {
    const referanslarRef = ref(database, "references");
    const snapshot = await get(referanslarRef);
    const data = snapshot.val();
    if (data) {
      references = Object.values(data); // Verileri bir array haline getir
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }

  return (
    <div className="refMain">
      <div className="refTitle">
        <h1>Referanslarımız</h1>
      </div>
      <div className="referancesBox">
        {references.map((reference, index) => (
          <a
            key={index}
            className="referancesA"
            target="_blank"
            href={reference.instagramLink}
          >
            <div
              className="referancesImage"
              style={{ backgroundImage: `url(${reference.imageUrl})` }}
            >
              <div className="instagramIcon">
                <FaInstagram />
              </div>
            </div>
          </a>
        ))}
      </div>
      <Footer />
    </div>
  );
}
