import { useState, useEffect } from "react";
import "./networks.css";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

export default function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {

    async function loadLinks() {

    }

    loadLinks();

  },[])

  async function handleSave(e) {
    e.preventDefault();

    await setDoc(doc(db, "social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube
    })
    .then(() => {
      console.log("URLS SALVAS COM SUCESSO!")
    })
    .catch((error) => {
      console.log("ERRO AO SALVAR " + error)
    })

  }

  return (
    <div className="admin-container">
      <Header />

      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label">Link do facebook</label>
        <Input
          placeholder="Digite o url do facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="label">Link do instagram</label>
        <Input
          placeholder="Digite o url do instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="label">Link do youtube</label>
        <Input
          placeholder="Digite o url do youtube..."
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button type="submit" className="btn-register">
          Salvar links <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
    </div>
  );
}
