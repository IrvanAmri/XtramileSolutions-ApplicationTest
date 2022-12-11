import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddStudent = () => {
  const [nim, setNim] = useState();
  const [namaDepan, setNamaDepan] = useState();
  const [namaBelakang, setNamaBelakang] = useState();
  const [tanggalLahir, setTanggalLahir] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="AddStudent">
      <div>
        <Link to={"/"}>To Student List</Link>
      </div>
      <br />
      <form>
        <h4>NIM</h4>
        <input
          type="text"
          required
          value={nim}
          onChange={(e) => setNim(e.target.value)}
        />
        <h4>Nama Depan</h4>
        <input
          type="text"
          required
          value={namaDepan}
          onChange={(e) => setNamaDepan(e.target.value)}
        />
        <h4>Nama Belakang</h4>
        <input
          type="text"
          required
          value={namaBelakang}
          onChange={(e) => setNamaBelakang(e.target.value)}
        />
        <h4>Tanggal Lahir</h4>
        <input
          type="date"
          required
          value={tanggalLahir}
          onChange={(e) => setTanggalLahir(e.target.value)}
        />
      </form>
      <br />
      <button onClick={handleSubmit}>submit</button>
    </main>
  );
};

export default AddStudent;
