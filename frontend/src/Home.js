import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "./api/axios";
import Feed from "./Feed";

function Home() {
  const [listStudent, setListStudent] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/students");
        setIsLoading(false);
        isMounted && setListStudent(response.data.payload);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleDelete = async (nim) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(`/api/students?nim=${nim}`);
      const response2 = await axios.get("/api/students");
      setIsLoading(false);
      setListStudent(response2.data.payload);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleEdit = (nim) => {
    console.log("edit: " + nim);
  };

  return (
    <main className="Home">
      <div>
        <Link to={"/add"}>add student</Link>{" "}
      </div>
      <br />
      <table className="Table1">
        {isLoading ? (
          <>
            <p>loading...</p>
          </>
        ) : listStudent.length ? (
          <>
            {" "}
            <thead>
              <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Usia</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <Feed
                listStudent={listStudent}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </tbody>
          </>
        ) : (
          <p>Student list is empty</p>
        )}
      </table>
    </main>
  );
}

export default Home;
