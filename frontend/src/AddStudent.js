import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "./api/axios";

const AddStudent = () => {
  const [nim, setNim] = useState();
  const [namaDepan, setNamaDepan] = useState();
  const [namaBelakang, setNamaBelakang] = useState();
  const [tanggalLahir, setTanggalLahir] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [nim]);

  const handleSubmit = async () => {
    try {
      const payload = JSON.stringify({
        id: nim,
        namaDepan: namaDepan,
        namaBelakang: namaBelakang,
        tanggalLahir: tanggalLahir,
      });
      setIsLoading(true);
      const response = await axios.post("/api/students", payload, {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      setIsLoading(false);
      setNim("");
      setNamaDepan("");
      setNamaBelakang("");
      setTanggalLahir({});
    } catch (error) {
      setIsLoading(false);
      if (!error.response) {
        setErrMsg("server not responding");
      } else {
        setErrMsg(error.response.data.messages);
      }
      console.log(error);
    }
  };

  return (
    <main className="AddStudent">
      <div>
        <Link to={"/"}>To Student List</Link>
      </div>
      <br />
      <form>
        {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
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
      {isLoading ? (
        <>
          <p>loading...</p>
        </>
      ) : (
        <>
          <button onClick={handleSubmit}>submit</button>
        </>
      )}
    </main>
  );
};

export default AddStudent;
