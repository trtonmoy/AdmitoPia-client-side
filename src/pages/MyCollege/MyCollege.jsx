import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [admissions, setAdmissions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/admission?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmissions(data);
      });
  }, []);

  return (
    <div>
      <h3>my college route</h3>
      <div>
        {admissions.map((admission) => (
          <p key={admission._id}> {admission.name} </p>
        ))}
      </div>
    </div>
  );
};

export default MyCollege;
