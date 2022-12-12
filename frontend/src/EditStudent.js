import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "./api/axios";

const EditStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/students/${id}`);
        setIsLoading(false);
        isMounted && setStudent(response.data.payload);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleSubmitEdit = async () => {
    try {
      const payload = JSON.stringify({
        id: student.nim,
        kunci: student.kunci,
        namaDepan: namaDepan,
        namaBelakang: namaBelakang,
        tanggalLahir: tanggalLahir,
      });
      setIsLoading(true);
      const response = await axios.put(`/api/students/`, payload, {
        headers: {
          "Content-Type": "Application/json",
        },
      });
      setIsLoading(false);
      setNamaDepan("");
      setNamaBelakang("");
      setTanggalLahir({});
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      setNamaDepan("");
      setNamaBelakang("");
      setTanggalLahir({});
      console.log(error);
    }
  };

  return (
    <main>
      <h3>Student id</h3>
      <p>{student.nim}</p>
      <br />
      <h3>Edit form</h3>
      <form>
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
          <button onClick={handleSubmitEdit}>submit</button>
        </>
      )}
    </main>
  );
};

export default EditStudent;
