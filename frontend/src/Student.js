import React, { useState } from "react";
import { Link } from "react-router-dom";

const Student = ({ studentData, handleDelete, handleEdit }) => {
  return (
    <>
      <td>{studentData.nim}</td>
      <td>{studentData.nama}</td>
      <td>{studentData.umur}</td>
      <td>
        <button onClick={() => handleEdit(studentData.nim, studentData.kunci)}>
          edit
        </button>
        <button onClick={() => handleDelete(studentData.nim)}>delete</button>
      </td>
    </>
  );
};

export default Student;
