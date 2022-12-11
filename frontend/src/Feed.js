import React from "react";
import Student from "./Student";

const Feed = ({ listStudent, handleDelete, handleEdit }) => {
  return (
    <>
      {listStudent.map((student) => (
        <tr>
          <Student
            studentData={student}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </tr>
      ))}
    </>
  );
};

export default Feed;
