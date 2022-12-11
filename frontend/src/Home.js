import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Feed from "./Feed";

function Home() {
  const [listStudent, setListStudent] = useState([
    {
      nim: "20/459268/PA/19929",
      nama: "Irvan Amri H",
      umur: "21",
    },
  ]);

  const handleDelete = (nim) => {
    console.log("delete: " + nim);
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
        {listStudent.length ? (
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
