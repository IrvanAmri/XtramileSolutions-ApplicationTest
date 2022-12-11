import React from "react";

const Student = ({ studentData, handleDelete, handleEdit }) => {
  return (
    <>
      <td>{studentData.nim}</td>
      <td>{studentData.nama}</td>
      <td>{studentData.umur}</td>
      <td>
        <button onClick={() => handleEdit(studentData.nim)}>edit</button>
        <button onClick={() => handleDelete(studentData.nim)}>delete</button>
      </td>
    </>
  );
};

export default Student;
